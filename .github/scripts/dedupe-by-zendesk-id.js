// scripts/dedupe-by-zendesk-id.js
// Finds markdown files in the same locale folder that share the same internalReference (Zendesk ID).
// Keeps the most recently updated file (by updatedAt frontmatter field) and deletes the older ones.

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const DOCS_DIR = path.join(__dirname, '..', '..', 'docs');
const LOCALES = ['en', 'es', 'pt'];
const DRY_RUN = process.argv.includes('--dry-run');

function getMarkdownFiles(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    for (const file of fs.readdirSync(dir)) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            results = results.concat(getMarkdownFiles(filePath));
        } else if (file.endsWith('.md')) {
            results.push(filePath);
        }
    }
    return results;
}

function parseFrontmatter(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^---([\s\S]*?)---/);
    if (!match) return null;
    try {
        return yaml.load(match[1]);
    } catch {
        return null;
    }
}

function main() {
    if (DRY_RUN) console.log('[dry-run] No files will be deleted.\n');
    let totalDeleted = 0;

    for (const locale of LOCALES) {
        const localeDir = path.join(DOCS_DIR, locale);
        if (!fs.existsSync(localeDir)) continue;

        const files = getMarkdownFiles(localeDir);

        // Group files by internalReference
        const groups = {};
        for (const filePath of files) {
            const fm = parseFrontmatter(filePath);
            if (!fm || !fm.internalReference) continue;
            const id = String(fm.internalReference);
            if (!groups[id]) groups[id] = [];
            groups[id].push({ filePath, updatedAt: fm.updatedAt ? new Date(fm.updatedAt) : new Date(0) });
        }

        for (const [id, entries] of Object.entries(groups)) {
            if (entries.length <= 1) continue;

            // Sort descending by updatedAt — newest first
            entries.sort((a, b) => b.updatedAt - a.updatedAt);

            const [keeper, ...duplicates] = entries;
            console.log(`[${locale}] Zendesk ID ${id}: keeping ${path.relative(DOCS_DIR, keeper.filePath)}`);

            for (const dup of duplicates) {
                console.log(`[${locale}] Zendesk ID ${id}: ${DRY_RUN ? '[dry-run] would delete' : 'deleting'} ${path.relative(DOCS_DIR, dup.filePath)}`);
                if (!DRY_RUN) fs.unlinkSync(dup.filePath);
                totalDeleted++;
            }
        }
    }

    if (totalDeleted === 0) {
        console.log('No duplicate Zendesk IDs found. Nothing to delete.');
    } else if (DRY_RUN) {
        console.log(`\n[dry-run] Would delete ${totalDeleted} file(s). Run without --dry-run to apply.`);
    } else {
        console.log(`Done. Deleted ${totalDeleted} duplicate file(s).`);
    }
}

main();
