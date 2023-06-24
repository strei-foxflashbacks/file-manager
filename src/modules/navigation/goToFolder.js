import process from 'node:process';
import path from 'path';

const goToFolder = async (passedPath) => {
  const destination = passedPath.trim().split('/').slice(-1)[0];
  const pathToDirectory = path.join(process.cwd(), destination);
  try {
    process.chdir(pathToDirectory);
  } catch {
    console.log('Operation failed');
  }
}
export default goToFolder;