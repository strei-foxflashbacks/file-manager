import path from 'path';

const extractFileName = (filePath) => {
  const extension = path.extname(filePath);
  const name = path.basename(filePath, extension);
  return name;
}
export default extractFileName;
