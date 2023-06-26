import fs from 'fs';
import path from 'path';

const copyFileTo = async (pathToFile, pathToCopy) => {
  try {
    const sourcePath = path.resolve(process.cwd(), pathToFile);
    const destinationPath = path.resolve('/', pathToCopy, path.basename(sourcePath));
    const originalFileStream = fs.createReadStream(sourcePath);
    const destinationFileStream = fs.createWriteStream(destinationPath);
    return new Promise((resolve) => {
      originalFileStream.pipe(destinationFileStream);
      originalFileStream.on('error', () => {
        console.log('Operation failed on original');
        resolve();
      });
      destinationFileStream.on('error', () => {
        console.log('Operation failed on destination');
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
