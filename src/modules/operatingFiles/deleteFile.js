import fs from 'fs/promises';
import path from 'path';

const deleteFile = async (fileName) => {
  const pathToFile = path.join(process.cwd(), fileName);
  try {
    await fs.unlink(pathToFile);
    console.log('Selected file succesfully deleted!');
  } catch {
    console.log('Operation failed');
  }
}
export default deleteFile;
