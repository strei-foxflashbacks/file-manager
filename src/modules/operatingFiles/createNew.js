import fs from 'fs/promises';
import path from 'path';

const createNew = async (fileName) => {
  const pathToNewFile = path.join(process.cwd(), fileName);
  try {
    await fs.writeFile(pathToNewFile, '', { flag: 'wx' });
  } catch {
    console.log('Operation failed');
  }
}
export default createNew;
