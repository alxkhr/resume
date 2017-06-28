const del = require('delete');
del.sync(['dist/*']);
console.log('cleaned dist');
