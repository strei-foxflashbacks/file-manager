import process from 'node:process';
import { argv, stdin, stdout, env } from 'node:process';
import os from 'os';
import commandListener from './commandListener.js';
import exitApp from './exitApp.js';
import currentDirectory from './currentDirectory.js';

const args = argv.slice(2);

const userEnter = async () => {
  try {
    const username = args.find((arg) => arg.startsWith('--username=')).split('=')[1];
    env.username = username;
    env.directory = os.homedir();
    stdin.write(
      `Welcome to the File Manager, ${username}!`
      );
    await currentDirectory();
    stdout.on('data', async (data) => {
      const command = data.toString().trim();
      await commandListener(command);
      await currentDirectory();
      stdin.write('\nPlease enter your command below:\n');
    })
    process.on('SIGINT', exitApp);
  } catch {
    throw new Error(
      'Entrance error: To run the app, type "npm run start --username=your_username"'
      );
  }
}

export default userEnter;