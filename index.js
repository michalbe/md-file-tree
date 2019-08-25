#!/usr/bin/env node
'use strict';

const cleanMarkdown = name => name.replace(/([\\\/_*|-])/g, '\\$1');
const directoryName = name => {
    return '- __' + cleanMarkdown(name) + '__\n';
};
const filename = (name, path) => {
    const link = path.replace(/^\/?(.+?)\/?$/, '$1') + '/' + encodeURIComponent(name);
    return '- [' + cleanMarkdown(name) + '](' + link + ')\n';
};

const main = () => {
    const tree = require('./walker');
    const dirPath = process.cwd();
    const dir = dirPath.split('/').pop();
    let indentation = 0;

    let output = directoryName(dir);

    const addIndentation = () => {
        return new Array((indentation * 2) + 1).join(' ');
    };

    const parseResult = result => {
        indentation++;
        Object.keys(result).sort().forEach(key => {
            const data = result[key];
            if (typeof data === 'string' && key[0] !== '.') {
                const path = data.split('/');
                output += addIndentation() + filename(path.pop(), path.join('/'));
            } else if (typeof data === 'object') {
                output += addIndentation() + directoryName(key);
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
