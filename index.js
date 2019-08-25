#!/usr/bin/env node
'use strict';

const cleanMarkdown = name => name.replace(/([\\\/_*|-])/g, '\\$1');
const directoryName = name => {
    return '- __' + cleanMarkdown(name) + '__\n';
};
const filename = (name, path) => {
    return '- [' + cleanMarkdown(name) + '](' + path.replace(/^\/?(.+?)\/?$/, '$1') + '/' + name + ')\n';
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
        for (const i in result) {
            if (typeof result[i] === 'string' && i[0] !== '.') {
                const path = result[i].split('/');
                output += addIndentation() + filename(path.pop(), path.join('/'));
            } else if (typeof result[i] === 'object') {
                output += addIndentation() + directoryName(i);
                parseResult(result[i]);
                indentation--;
            }
        }
    };
    tree(dirPath, (err, result) => {
        parseResult(result);
        console.log(output);
    });

};

main();
