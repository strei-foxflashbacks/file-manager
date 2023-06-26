import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import extractFileName from '../../../utils/extractFileName.js';

const compressFile = async (pathToFile, pathToDestination) => {
  const sourcePath = path.join(process.cwd(), pathToFile);
  const destinationPath = path.join(pathToDestination, `${extractFileName(sourcePath)}.br`);

  return new Promise((resolve) => {
    const sourceStream = fs.createReadStream(sourcePath);
    const brotilCompress = zlib.createBrotliCompress();
    const destinationStream = fs.createWriteStream(destinationPath);

    sourceStream.pipe(brotilCompress).pipe(destinationStream);
    sourceStream.on('error', () => {
      console.log('Operation failed');
      resolve();
    });
    destinationStream.on('finish', () => {
      console.log('File compressed successfully!');
      resolve();
    })
  });
}
export default compressFile;
