'use strict';

const fs = require('fs'),
    Emitter = require('events').EventEmitter,
    emitter = new Emitter(),
    eventState = require('event-state'),

    dirTree = (path, cb) => {
        const buildBranch = (path, branch) => {

            fs.readdir(path, (err, files) => {

                if (err) {
                    //Errors result in a false value in the tree.
                    branch[path] = false;
                    cb(err);
                } else {
                    const newEvents = files.map(file => {
                        return path + '/' + file;
                    });

                    if (!state) {
                        // If this is the first iteration,
                        // initialize the dynamic state machine (DSM).
                        state = emitter.required(newEvents, () => {
                            // Allow for multiple paradigms vis-a-vis callback and promises.

                            // resolve the promise with the completed tree..
                            cb(null, tree);
                        });
                    } else {
                        // Add events to the DSM for the directory's children
                        state.add(newEvents);
                    }

                    // Check each file descriptor to see if it's a directory.
                    files.forEach(file => {
                        const filePath = path + '/' + file;
                        fs.stat(filePath, (err, stats) => {
                            if (err) {
                                // Errors result in a false value in the tree
                                branch[file] = false;
                                emitter.emit(filePath, true);
                            } else if (stats.isDirectory() && file[0] !== '.' && file !== 'node_modules') {

                                // Directories are object properties on the tree.
                                branch[file] = {};
                                //console.log('cur dir name', file);
                                // Recurse into the directory.
                                buildBranch(filePath, branch[file]);
                            } else {
                                const fp = filePath.replace(process.cwd(), '');
                                //console.log(dir, file);
                                // If it's not a directory, it's a file.
                                // Files get a true value in the tree.
                                branch[file] = fp;
                                emitter.emit(filePath, true);
                            }
                        });
                    });
                }

                //Once we've read the directory, we can raise the event for the parent
                // directory and let it's children take care of themselves.
                emitter.emit(path, true);
            });
        };

        let tree = {},
            state;

        return buildBranch(path, tree);
    };

emitter.required = eventState;

module.exports = dirTree;
