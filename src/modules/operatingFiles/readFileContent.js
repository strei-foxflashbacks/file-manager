// import fs from 'fs/promises';
// import path from 'path';

// const readFileContent = async (destination) => {
//   try {
//     const pathToFile = path.join(process.cwd(), destination);
//     const data = await fs.createReadStream(pathToFile, 'utf-8');
//     data.on('data', (chunk) => {
//       console.log(chunk);
//     });
//   } catch {
//     console.log('Operation failed');
//   }
// }
// export default readFileContent;