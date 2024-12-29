// Import required modules
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create an interface to interact with the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to organize files by extension
function organizeFiles(directory) {
  // Check if the directory exists
  if (!fs.existsSync(directory)) {
    console.log('Directory does not exist!');
    rl.close();
    return;
  }

  // Read all files in the directory
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log('Error reading the directory:', err);
      rl.close();
      return;
    }

    // Process each file in the directory
    files.forEach(file => {
      const filePath = path.join(directory, file);
      const fileExtension = path.extname(file).toLowerCase();

      // Skip directories and process files
      if (fs.lstatSync(filePath).isFile()) {
        let folderName = '';
        
        // Classify files by their extension
        switch (fileExtension) {
          case '.txt':
            folderName = 'Text Files';
            break;
          case '.jpg':
          case '.jpeg':
          case '.png':
          case '.gif':
            folderName = 'Images';
            break;
          case '.pdf':
            folderName = 'PDFs';
            break;
          case '.mp4':
            folderName = 'Videos';
            break;
          default:
            folderName = 'Others';
            break;
        }

        // Create a folder for the file type if it doesn't exist.
        const folderPath = path.join(directory, folderName);
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
        }

        // Move the file to the appropriate folder.
        const newFilePath = path.join(folderPath, file);
        fs.rename(filePath, newFilePath, (err) => {
          if (err) {
            console.log('Error moving file:', err);
          } else {
            console.log(`Moved ${file} to ${folderName}`);
          }
        });
      }
    });

    rl.close();
  });
}

// Ask the user for the directory to organize
rl.question('Enter the directory path to organize: ', (dir) => {
  organizeFiles(dir);
});
