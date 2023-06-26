import fs from 'fs';
import path from 'path';

const readFileContent = async (destination) => {
  try {
    const pathToFile = path.join(process.cwd(), destination);
    return new Promise((resolve) => {
      const data = fs.createReadStream(pathToFile, 'utf-8');
      console.log('Reading file...\n');
      data.on('data', (chunk) => {
        console.log(chunk);
      });
      data.on('error', () => {
        console.log('Operation failed');
        resolve();
      })
      data.on('end', () => {
        resolve();
      });
    });
  } catch {
    console.log('Invalid input');
  }
}
export default readFileContent;
