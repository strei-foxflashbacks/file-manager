import os from 'os';

const getEOL = async () => {
  console.log(
    `The default system End-Of-Line is: ${JSON.stringify(os.EOL)}`
    );
}
export default getEOL;
