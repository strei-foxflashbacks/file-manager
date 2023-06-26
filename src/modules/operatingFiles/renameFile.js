import fs from 'fs/promises';
import path from 'path';

const renameFile = async (oldName, newName) => {
  try {
    const pathToFile = path.join(process.cwd(), oldName);
    const newFileName = path.join(path.dirname(pathToFile), newName);
    try {
      await fs.rename(pathToFile, newFileName);
      console.log('Selected file succesfully renamed!');
    } catch {
      console.log('Operation failed');
    }
  } catch {
    console.log('Invalid input');
  }
}
export default renameFile;
