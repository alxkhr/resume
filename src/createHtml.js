const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
handlebars.registerHelper('drawSkillLevel', drawSkillLevel);
const resume = require('../content/resume.json');
const labels = require('../content/labels.json');
const template = fs.readFileSync(path.resolve(__dirname, './resume.handlebars'), 'utf-8');
const output = handlebars.compile(template)({ resume, labels });
fs.writeFile(path.resolve(__dirname, '../dist/index.html'), output, 'utf-8' , function(err) {
  if (err) return console.log(err);
  console.log('handlebars: HTML created');
});

function drawSkillLevel(level) {
  function p(angle, radius) {
    const radians = angle * (Math.PI / 180);
    const x = 1.5 + Math.sin(radians) * radius;
    const y = 2.5 - Math.cos(radians) * radius;
    return ` ${x} ${y}`;
  }
  const path = `M${p(0, 1)} L${p(36, 0.5)} L${p(72, 1)} L${p(108, 0.5)} L${p(144, 1)} L${p(180, 0.5)} L${p(216, 1)} L${p(252, 0.5)} L${p(288, 1)} L${p(324, 0.5)} Z`;
  const svg = `<svg style="fill: currentcolor;" height="1em" width="0.625em" viewBox="0 0 2.5 4"><path d="${path}" /></svg>`;
  if (level === 'master') {
    return new handlebars.SafeString(svg + svg + svg);
  }
  if (level === 'advanced') {
    return new handlebars.SafeString(svg + svg);
  }
  if (level === 'beginner') {
    return new handlebars.SafeString(svg);
  }
  return '';
}
