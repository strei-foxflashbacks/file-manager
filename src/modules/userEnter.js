import process from 'node:process';
import { argv, stdin, stdout, env } from 'node:process';
import commandListener from './commandListener.js';
import exitApp from './exitApp.js';

const args = argv.slice(2);

const userEnter = async () => {
  try {
    const username = args.find((arg) => arg.startsWith('--username=')).split('=')[1];
    stdin.write(`Welcome to the File Manager, ${username}!\n\nPlease enter your command below:\n`);
    env.username = username;
    stdout.on('data', async (data) => {
      const command = data.toString().trim();
      await commandListener(command);
    })
    process.on('SIGINT', exitApp);
  } catch {
    throw new Error('Entrance error: To run the app, type "npm run start --username=your_username"');
  }
}

export default userEnter;