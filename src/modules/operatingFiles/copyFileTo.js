import fs from 'fs';
import path from 'path';

const copyFileTo = async (pathToFile, pathToCopy) => {
  try {
    const sourcePath = path.join(process.cwd(), pathToFile);
    const destinationPath = path.join(pathToCopy, path.basename(sourcePath));
    return new Promise((resolve) => {
      const originalFileStream = fs.createReadStream(sourcePath);
      const destinationFileStream = fs.createWriteStream(destinationPath);

      originalFileStream.pipe(destinationFileStream);
      originalFileStream.on('error', () => {
        console.log('Operation failed');
        resolve();
      });
      destinationFileStream.on('error', () => {
        console.log('Operation failed');
        resolve();
      });
      destinationFileStream.on('finish', () => {
        console.log('File copied successfully!');
        resolve();
      });
    });
  } catch {
    console.log('Invalid input');
  }
}
export default copyFileTo;
