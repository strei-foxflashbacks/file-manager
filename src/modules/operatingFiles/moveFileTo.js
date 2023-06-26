import fs from 'fs';
import path from 'path';

const moveFileTo = async (pathToFile, pathToMove) => {
  try {
    const sourcePath = path.join(process.cwd(), pathToFile);
    const destinationPath = path.join(pathToMove, path.basename(sourcePath));
    return new Promise((resolve) => {
      const originalFileStream = fs.createReadStream(sourcePath);
      const destinationFileStream = fs.createWriteStream(destinationPath);

      originalFileStream.pipe(destinationFileStream);
      originalFileStream.on('error', () => {
        console.log('Operation failed');
        resolve();
      });
      destinationFileStream.on('finish', () => {
        fs.unlink(sourcePath, (err) => {
          if (err) {
            console.log('Operation failed');
          }
        });
        console.log('File moved successfully!');
        resolve();
      });
    });
  } catch {
    console.log('Invalid input');
  }
}
export default moveFileTo;
