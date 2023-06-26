import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import extractFileName from '../../../utils/extractFileName.js';

const decompressFile = async (pathToFile, pathToDestination) => {
  try {
    const sourcePath = path.join(process.cwd(), pathToFile);
    const destinationPath = path.join(pathToDestination, `${extractFileName(sourcePath)}.txt`);

    return new Promise((resolve) => {
      const sourceStream = fs.createReadStream(sourcePath);
      const brotliDecompress = zlib.createBrotliDecompress();
      const destinationStream = fs.createWriteStream(destinationPath);

      sourceStream.pipe(brotliDecompress).pipe(destinationStream);
      sourceStream.on('error', () => {
        console.log('Operation failed');
        resolve();
      });
      destinationStream.on('error', () => {
        console.log('Operation failed');
        resolve();
      });
      destinationStream.on('finish', () => {
        console.log('File decompressed successfully!');
        resolve();
      })
    });
  } catch {
    console.log('Invalid input');
  }
}
export default decompressFile;
