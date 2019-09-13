#!/usr/bin/env node
'use strict';

const tree = require('./walker');

const emoji = process.argv.includes('--emoji') || process.argv.includes('-e');
const cleanMarkdown = name => name.replace(/([\\\/_*|-])/g, '\\$1');
const directoryName = name => {
    return '- ' + (emoji ? '📂 ' : '') + '__' + cleanMarkdown(name) + '__\n';
};
const filename = (name, path) => {
    const link = path.replace(/^\/?(.+?)\/?$/, '$1') + '/' + encodeURIComponent(name);
    return '- ' + (emoji ? '📄 ' : '') + '[' + cleanMarkdown(name) + '](' + link.replace(/^\/?(.+?)$/, '$1') + ')\n';
};
const addIndentation = i => {
    return ' '.repeat(i * 2 + 1);
};

const main = () => {
    const dirPath = process.cwd();
    const dir = dirPath.split('/').pop();

    let indentation = 0;
    let output = directoryName(dir);

    const parseResult = result => {
        indentation++;
        Object.keys(result).sort().forEach(key => {
            const data = result[key];
            if (typeof data === 'string' && key[0] !== '.') {
                const path = data.split('/');
                output += addIndentation(indentation) + filename(path.pop(), path.join('/'));
            } else if (typeof data === 'object') {
                output += addIndentation(indentation) + directoryName(key);
                parseResult(data);
                indentation--;
            }
        });
    };

    tree(dirPath, (err, result) => {
        parseResult(result);
        console.log(output);
    });

};

main();
