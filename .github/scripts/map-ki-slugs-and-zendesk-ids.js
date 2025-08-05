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

function extractInternalReference(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Extract YAML frontmatter block
    const frontmatterMatch = content.match(/^---([\s\S]*?)---/);
    if (!frontmatterMatch) {
        console.log(`[extractInternalReference] No frontmatter found in: ${filePath}`);
        return null;
    }
    let frontmatter;
    try {
        frontmatter = yaml.load(frontmatterMatch[1]);
    } catch (e) {
        console.log(`[extractInternalReference] YAML parse error in: ${filePath}`);
        return null;
    }
    if (!frontmatter || !frontmatter.internalReference) {
        console.log(`[extractInternalReference] No internalReference found in: ${filePath}`);
        return null;
    }
    return frontmatter.internalReference;
}

function main() {
    console.log('[main] Starting mapping process...');
    const output = [];
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
                const internalReference = extractInternalReference(file);
                if (internalReference) {
                    output.push({
                        locale,
                        slug: path.basename(file, '.md'),
                        internalReference
                    });
                }
            });
        });
    });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
    console.log(`[main] Output written to ${OUTPUT_FILE}`);
}

main();