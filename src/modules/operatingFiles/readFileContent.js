import fs from 'fs';
import path from 'path';

const readFileContent = async (destination) => {
  const pathToFile = path.join(process.cwd(), destination);
  return new Promise((resolve) => {
    const data = fs.createReadStream(pathToFile, 'utf-8');
    data.on('data', (chunk) => {
      console.log(chunk);
    });
    data.on('error', () => {
      console.log('Operation failed');
    })
    data.on('end', () => {
      resolve();
    });
  })
}
export default readFileContent;