const fs = require('fs');
const path = require('path');

// Define the folder path
const folderPath = '/Users/coralee.long/Desktop/SG';

// Create the SG folder if it doesn't exist
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// Move all existing screenshots to the SG folder
fs.readdirSync('/Users/coralee.long/Desktop').forEach(file => {
  if (file.startsWith('Screenshot') && file.endsWith('.png')) {
    fs.renameSync(path.join('/Users/coralee.long/Desktop', file), path.join(folderPath, file));
  }
});