const { resolve } = require('path');
const { readdir, renameSync } = require('fs');

readdir(resolve(__dirname), (err, files) => {
  files.forEach(file => {
    if (file.endsWith('.JPG')) {
      renameSync(resolve(__dirname, file), resolve(__dirname, file.split('.')[0] + '.jpg'));
    }
  })
})