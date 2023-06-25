import os from 'os';

const getSystemUsername = async () => {
  const systemUsername = os.userInfo().username;
  console.log(`Your system user name is "${systemUsername}"`);
}
export default getSystemUsername;
