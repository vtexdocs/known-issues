const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const yaml = require('js-yaml');

function yamlSafeString(value) {
    if (typeof value !== 'string') return value;
    
    // Remove any existing quotes that gray-matter might have included in the parsed value
    // This handles cases where the YAML had '''quoted''' values that got parsed with quotes in the string
    value = value.trim().replace(/^['"](.*)['"]$/, "$1");
    
    // Return the clean value
    return value;
}

function processObject(obj) {
    if (!obj) return obj;

    Object.keys(obj).forEach(key => {
        if (Array.isArray(obj[key])) {
            obj[key] = obj[key].map(item => {
                if (typeof item === 'string') {
                    return yamlSafeString(item);
                }
                return item;
            });
        } else if (typeof obj[key] === 'string') {
            obj[key] = yamlSafeString(obj[key]);
        } else if (typeof obj[key] === 'object') {
            processObject(obj[key]);
        }
    });
    return obj;
}

function processFile(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        // Process all frontmatter values
        const processedData = processObject(data);

        // Manually build YAML with title quoted
        let yamlStr = '';
        for (const [key, value] of Object.entries(processedData)) {
            if (key === 'title' && typeof value === 'string') {
                // Quote title with single quotes and escape internal quotes
                const escapedValue = value.replace(/'/g, "''");
                yamlStr += `${key}: '${escapedValue}'\n`;
            } else if (typeof value === 'string') {
                // For other strings, let js-yaml decide
                yamlStr += yaml.dump({ [key]: value }, { lineWidth: -1 });
            } else {
                // For non-strings (numbers, dates, etc), use js-yaml
                yamlStr += yaml.dump({ [key]: value }, { lineWidth: -1 });
            }
        }

        // Combine frontmatter with content
        const updatedContent = `---\n${yamlStr}---\n\n${content}`;

        // Write the file
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

// Parse command line arguments
const targetPath = process.argv[2];

if (!targetPath) {
    // No argument provided → process all files in docs directory
    console.log('No path provided. Processing all files in docs directory...\n');
    const docsDir = path.join(__dirname, '../../docs');
    processDirectory(docsDir);
    console.log('\n✓ Done processing all files!');
} else {
    // Resolve the path (handle relative paths from current working directory)
    const resolvedPath = path.resolve(targetPath);

    if (!fs.existsSync(resolvedPath)) {
        console.error(`Error: Path does not exist: ${targetPath}`);
        process.exit(1);
    }

    const stat = fs.statSync(resolvedPath);

    if (stat.isDirectory()) {
        // Process all files in directory
        console.log(`Processing all files in directory: ${targetPath}\n`);
        processDirectory(resolvedPath);
        console.log('\n✓ Done processing directory!');
    } else if (stat.isFile() && resolvedPath.endsWith('.md')) {
        // Process single file
        console.log(`Processing single file: ${targetPath}\n`);
        processFile(resolvedPath);
        console.log('\n✓ Done!');
    } else {
        console.error('Error: Path must be a markdown file (.md) or a directory');
        process.exit(1);
    }
}