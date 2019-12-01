#!/usr/bin/env node

const nameExists = require('.');
const yargs = require('yargs');

const config = yargs.options({
  name: { type: 'string', required: true },
  update: { type: 'boolean', default: true },
}).command({
  command: '$0 <name>'
}).argv;

if (!nameExists(config)) {
  console.log(`No package similar to '${config.name}' found`);
}
