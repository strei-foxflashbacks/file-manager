import process from 'node:process';
import os from 'os';
import commandListener from './commandListener.js';
import exitApp from './exitApp.js';
import currentDirectory from './currentDirectory.js';

const args = process.argv.slice(2);

const userEnter = async () => {
  try {
    const username = args.find((arg) => arg.startsWith('--username=')).split('=')[1];
    process.env.username = username;
    process.chdir(os.homedir())
    process.stdin.write(
      `Welcome to the File Manager, ${username}!`
      );
    await currentDirectory();
    process.stdout.on('data', async (data) => {
      const command = data.toString().trim();
      await commandListener(command);
      await currentDirectory();
    })
    process.on('SIGINT', exitApp);
  } catch {
    throw new Error(
      'Entrance error: To run the app, type "npm run start --username=your_username"'
      );
  }
}

export default userEnter;