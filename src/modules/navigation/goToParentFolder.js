import path from 'path';
import os from 'os';
import process from 'node:process';

const goToParentFolder = async () => {
  const currentPath = process.cwd();
  const parentPath = currentPath === os.homedir()
                    ? os.homedir()
                    : path.resolve(currentPath, '..');
  try {
    process.chdir(parentPath);
  } catch {
    console.log('Operation failed');
  }
}
export default goToParentFolder;
