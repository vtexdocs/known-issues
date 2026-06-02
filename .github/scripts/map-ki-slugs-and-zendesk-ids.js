// scripts/map-ki-slugs-and-zendesk-ids.js


const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const DOCS_DIR = path.join(__dirname, '..', '..', 'docs');
const OUTPUT_FILE = path.join(__dirname, '..', 'ki-slugs-and-zendesk-ids.json');
const LOCALES = ['en', 'es', 'pt'];

function getMarkdownFiles(dir) {
    let results = [];
    if (!fs.existsSync(dir)) {
        console.log(`[getMarkdownFiles] Directory does not exist: ${dir}`);
        return results;
    }
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getMarkdownFiles(filePath));
        } else if (file.endsWith('.md')) {
            results.push(filePath);
        }
    });
    return results;
}

function extractFrontmatter(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const frontmatterMatch = content.match(/^---([\s\S]*?)---/);
    if (!frontmatterMatch) {
        console.log(`[extractFrontmatter] No frontmatter found in: ${filePath}`);
        return null;
    }
    try {
        return yaml.load(frontmatterMatch[1]);
    } catch (e) {
        console.log(`[extractFrontmatter] YAML parse error in: ${filePath}`);
        return null;
    }
}

function main() {
    console.log('[main] Starting mapping process...');

    // Map of "locale:internalReference" -> best entry so far
    const best = {};

    LOCALES.forEach(locale => {
        const localeDir = path.join(DOCS_DIR, locale);
        if (!fs.existsSync(localeDir)) {
            console.log(`[main] Locale directory does not exist: ${localeDir}`);
            return;
        }
        const categories = fs.readdirSync(localeDir);
        categories.forEach(category => {
            const categoryDir = path.join(localeDir, category);
            const files = getMarkdownFiles(categoryDir);
            files.forEach(file => {
                const fm = extractFrontmatter(file);
                if (!fm || !fm.internalReference) return;

                const key = `${locale}:${fm.internalReference}`;
                const updatedAt = fm.updatedAt ? new Date(fm.updatedAt) : new Date(0);
                const candidate = { locale, slug: path.basename(file, '.md'), internalReference: fm.internalReference, updatedAt };

                if (!best[key] || updatedAt > best[key].updatedAt) {
                    if (best[key]) {
                        console.log(`[main] Duplicate Zendesk ID ${fm.internalReference} (${locale}): preferring ${candidate.slug} over ${best[key].slug}`);
                    }
                    best[key] = candidate;
                }
            });
        });
    });

    const output = Object.values(best).map(({ locale, slug, internalReference }) => ({ locale, slug, internalReference }));
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
    console.log(`[main] Output written to ${OUTPUT_FILE}`);
}

main();