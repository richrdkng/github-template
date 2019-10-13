#!/usr/bin/env node

// get args -----------------------------------------------------------------------------------------------------------*
const assert = require('assert')
const [,, dir] = process.argv

// simple cwd guard
assert(dir === '.', `Current directory must be specified as ".", got: "${dir}"`)

// prepare paths ------------------------------------------------------------------------------------------------------*
const path = require('path')

const pkg = require('../package.json')
const cwd = process.cwd()
const src = path.join(__dirname, '../.github')
const dest = path.join(cwd, dir, '/.github')

// copy files ---------------------------------------------------------------------------------------------------------*
const fs = require('fs-extra')

console.log(`${pkg.name} v${pkg.version} - copy templates:`)
console.log(`from ${src}`)
console.log(`to ${dest}`)

fs.copySync(src, dest)
