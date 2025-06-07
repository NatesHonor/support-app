const fs = require('fs');
const path = require('path');
const docsDir = path.join(__dirname, '../public', 'docs');
const outputPath = path.join(docsDir, 'index.json');

fs.readdir(docsDir, (err, files) => {
  if (err) {
    console.error('Error reading docs directory:', err);
    process.exit(1);
  }

  const htmlFiles = files.filter(file => file.endsWith('.html'));
  
  fs.writeFile(outputPath, JSON.stringify(htmlFiles, null, 2), err => {
    if (err) {
      console.error('Error writing index.json:', err);
      process.exit(1);
    }
    console.log(`✅ index.json generated with ${htmlFiles.length} file(s).`);
  });
});
