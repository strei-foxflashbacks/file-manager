import os from 'os';

const getHomeDir = async () => {
  const homedir = os.homedir();
  console.log(`Your home directory is "${homedir}"`);
}
export default getHomeDir;
