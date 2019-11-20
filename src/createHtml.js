const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const helper = require('./helper.js');
handlebars.registerHelper('drawSkillLevel', helper.drawSkillLevel);
handlebars.registerHelper('convertToDec', helper.convertToDec);
const resume = require('../content/resume.json');
const labels = require('../content/labels.json');
const template = fs.readFileSync(path.resolve(__dirname, './resume.handlebars'), 'utf-8');
fs.writeFile(
  path.resolve(__dirname, '../dist/index.html'),
  handlebars.compile(template)({ resume, labels }),
  'utf-8',
  function(err) {
    if (err) return console.log(err);
    console.log('handlebars: HTML created');
  },
);
