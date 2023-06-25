import process from 'node:process';
import fs from 'fs/promises';
import getFileType from '../../utils/getFileType.js';

const listDirectory = async () => {
  const currentDirectory = process.cwd();
  try {
    const filesInDirectory = await fs.readdir(currentDirectory);
    const filesWithStats = await Promise.all(
      filesInDirectory.map(async (file) => {
        const fileType = await getFileType(file);
        return {Name: file, Type: fileType}
      })
    )
    const directories = [...filesWithStats]
                        .filter(element => element.Type === 'directory')
                        .sort((a, b) => a.Name.localeCompare(b.Name));
    const rest = [...filesWithStats]
                  .filter(element => element.Type !== 'directory')
                  .sort((a, b) => a.Name.localeCompare(b.Name));
    const output = [...directories, ...rest];
    console.table(output);
  } catch {
    console.log('Operation failed');
  }
}
export default listDirectory;
