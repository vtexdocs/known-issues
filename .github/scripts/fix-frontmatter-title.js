const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const yaml = require('js-yaml');

function cleanQuotes(value) {
    // Remove existing quotes from the parsed value
    value = value.trim().replace(/^['"`](.*)['"`]$/, "$1");
    return value;
}

function processFile(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        // Clean the title value
        if (data.title && typeof data.title === 'string') {
            data.title = cleanQuotes(data.title);
        }

        // Manually build YAML with title always quoted
        let yamlStr = '';
        for (const [key, value] of Object.entries(data)) {
            if (key === 'title' && typeof value === 'string') {
                // Always quote title with single quotes and escape internal quotes
                const escapedValue = value.replace(/'/g, "''");
                yamlStr += `${key}: '${escapedValue}'\n`;
            } else {
                // For other fields, let js-yaml decide
                yamlStr += yaml.dump({ [key]: value }, { lineWidth: -1 });
            }
        }

        // Combine frontmatter with content
        const updatedContent = `---\n${yamlStr}---\n${content}`;

        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`✓ Processed ${filePath}`);
        return true;
    } catch (error) {
        console.error(`× Error processing ${filePath}:`, error.message);
        return false;
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.md')) {
            processFile(fullPath);
        }
    });
}

// Main execution
const targetPath = process.argv[2];

if (!targetPath) {
    console.log('No path provided. Processing all files in docs directory...\n');
    const docsDir = path.join(__dirname, '../../docs');
    processDirectory(docsDir);
    console.log('\n✓ Done processing all files!');
} else {
    const resolvedPath = path.resolve(targetPath);

    if (!fs.existsSync(resolvedPath)) {
        console.error(`Error: Path does not exist: ${targetPath}`);
        process.exit(1);
    }

    const stat = fs.statSync(resolvedPath);

    if (stat.isDirectory()) {
        console.log(`Processing all files in directory: ${targetPath}\n`);
        processDirectory(resolvedPath);
        console.log('\n✓ Done processing directory!');
    } else if (stat.isFile() && resolvedPath.endsWith('.md')) {
        console.log(`Processing single file: ${targetPath}\n`);
        processFile(resolvedPath);
        console.log('\n✓ Done!');
    } else {
        console.error('Error: Path must be a markdown file (.md) or a directory');
        process.exit(1);
    }
}