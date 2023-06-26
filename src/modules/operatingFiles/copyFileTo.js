import fs from 'fs';
import path from 'path';

const copyFileTo = async (pathToFile, pathToCopy) => {
  const sourcePath = path.join(process.cwd(), pathToFile);
  const destinationPath = path.join(pathToCopy, path.basename(sourcePath));
  return new Promise((resolve) => {
    const originalFileStream = fs.createReadStream(sourcePath);
    const destinationFileStream = fs.createWriteStream(destinationPath);

    originalFileStream.pipe(destinationFileStream);
    originalFileStream.on('error', () => console.log('Operation failed'));
    destinationFileStream.on('finish', () => {
      console.log('File copied successfully!');
      resolve();
    });
  });
}
export default copyFileTo;
