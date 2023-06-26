import path from 'path';
const { createHmac } = await import('node:crypto');

const calculateHash = async (pathToFile) => {
  try {
    const fileToCalcPath = path.join(process.cwd(), pathToFile);
    try {
      const secret = 'RSS';
      const hash = createHmac('sha256', secret)
              .update(fileToCalcPath)
              .digest('hex');
      console.log(`Calculated hash for selected file: ${hash}`);
    } catch {
      console.log('Operation failed');
    }
  } catch {
    console.log('Invalid input');
  }
}
export default calculateHash;
