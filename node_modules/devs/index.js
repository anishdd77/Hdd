#!/usr/bin/env node

var watchify = require('watchify');
var program = require('commander');

var browserify = require('browserify');
var path = require('path');

var server = require('./server');

program
  .version(require('./package.json').version)
  .option('-p, --port <n>', 'Port for http server. defaults to 8000', parseInt)
  .option('-o, --output <name>', 'filename for bundled output file. defaults to bundle.js')
  .parse(process.argv);

var sourceFile = program.args[0];

var bundle;

if (sourceFile) {
  var browserifyArgs = { 
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true,
    basedir: process.cwd()
  };

  bundle = watchify(browserify(path.join(process.cwd(), sourceFile), browserifyArgs));
}

server.start(program.port, bundle, program.output);
