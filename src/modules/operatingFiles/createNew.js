import fs from 'fs/promises';
import path from 'path';

const createNew = async (fileName) => {
  try {
    const pathToNewFile = path.join(process.cwd(), fileName);
    try {
      await fs.writeFile(pathToNewFile, '', { flag: 'wx' });
      console.log('New empty file created!');
    } catch {
      console.log('Operation failed');
    }
  } catch {
    console.log('Invalid input');
  }
}
export default createNew;
