'use strict';
const ROOT = process.cwd();
const fs = require('fs');
const path = require('path');
const Glob = require('glob');

function getEntry (globPath) {
  let entries = {};
  Glob.sync(globPath).forEach(function (entry) {
    let basename = path.basename(entry, path.extname(entry)),
      pathname = path.dirname(entry);
    if (!entry.match(/\/js\/lib\//)) {
      entries[pathname.split('/').splice(3).join('/') + '/' + basename] = pathname + '/' + basename;
    }
  });
  return entries;
}

console.log('getEntry', getEntry('./src/js/**/*.js'));

module.exports = {

};

