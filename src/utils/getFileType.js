import fs from 'fs/promises';

const getFileType = async (filePath) => {
  try {
    const typeOfFile = await fs.stat(filePath);
    if (typeOfFile.isDirectory()) {
      return 'directory';
    }
    if (typeOfFile.isFile()) {
      return 'file';
    }
    if (typeOfFile.isSymbolicLink()) {
      return 'symbolic link';
    } else {
      return 'unknown';
    }
  } catch {
    throw new Error('Cannot get file type')
  }
}
export default getFileType;
