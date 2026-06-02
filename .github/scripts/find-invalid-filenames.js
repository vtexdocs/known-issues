// scripts/find-invalid-filenames.js
// Finds markdown files with invalid names: empty filename (.md) or named "untitled.md".
// Prints their paths to stdout, one per line. Used by the GitHub Action to stage deletions.

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', '..', 'docs');
const INVALID_NAMES = ['.md', 'untitled.md'];

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

const files = getMarkdownFiles(DOCS_DIR);
const invalid = files.filter(f => INVALID_NAMES.includes(path.basename(f)));

if (invalid.length === 0) {
    console.log('No invalid filenames found.');
    process.exit(0);
}

for (const f of invalid) {
    console.log(f);
}
