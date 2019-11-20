const copy = require('recursive-copy');
copy('content/assets', 'dist/assets', function(error, results) {
  if (error) {
    console.error('Copy failed: ' + error);
  } else {
    console.info(
      'Copied ',
      results.map(({ src }) => src),
    );
  }
});
copy('content/server-res', 'dist', function(error, results) {
  if (error) {
    console.error('Copy failed: ' + error);
  } else {
    console.info(
      'Copied ',
      results.map(({ src }) => src),
    );
  }
});
