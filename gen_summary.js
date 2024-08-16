const fs = require('fs');
const path = require('path');


class CodeBuilder {
    tabLevel = 0
    code = ''

    tab() {
        this.tabLevel++
    }

    unTab() {
        this.tabLevel--
    }

    inTab(callback) {
        this.tab();
        callback()
        this.unTab();
    }

    add(text, moveLine = true) {
        if (!text) {
            this.code += '\n'
            return
        }

        let tab = ' '.repeat(this.tabLevel * 4)
        this.code += tab + text + (moveLine ? '\n' : '')
    }

    addMultiline(text, inline = false) {
        let lines = text.trim().split('\n')
        for (let line of lines) {
            this.add(line)
        }
    }

    append(code) {
        this.addMultiline(code.render())
    }

    render() {
        return this.code
    }
}

// Function to generate the Markdown structure
function generateMarkdown(dir, basePath) {
    let result = new CodeBuilder();

    // Read the contents of the directory
    const filesAndDirs = fs.readdirSync(dir);

    // Sort the contents so directories are listed before files
    filesAndDirs.sort((a, b) => {
        const aPath = path.join(dir, a);
        const bPath = path.join(dir, b);
        const aIsDir = fs.statSync(aPath).isDirectory();
        const bIsDir = fs.statSync(bPath).isDirectory();
        if (aIsDir && !bIsDir) return -1;
        if (!aIsDir && bIsDir) return 1;
        return a.localeCompare(b);
    });

    filesAndDirs.forEach(fileOrDir => {
        const fullPath = path.join(dir, fileOrDir);
        // console.log(fullPath)
        const relativePath = path.join('reference', path.relative(basePath, fullPath));
        const isDir = fs.statSync(fullPath).isDirectory();

        if (isDir) {
            result.add(`* [${fileOrDir}](${relativePath}/README.md)`)
            // result += `* [${fileOrDir}](${relativePath}/README.md)\n`;
            result.inTab(() => {
                result.append(generateMarkdown(fullPath, basePath))
            })
            // result += generateMarkdown(fullPath, basePath);
        } else if (path.extname(fileOrDir) === '.md' && fileOrDir !== 'README.md') {
            const dirName = path.basename(path.dirname(fullPath));
            result.add(`* [${path.basename(fileOrDir, '.md')}](${relativePath})`)
            // result += `  * [${path.basename(fileOrDir, '.md')}](${relativePath})\n`;
        }
    });

    return result;
}

// Set the base directory
const baseDir = path.join(__dirname, 'docs/reference');

// Generate the Markdown structure
const markdown = generateMarkdown(baseDir, baseDir);

// Output the result
console.log(markdown.render());
