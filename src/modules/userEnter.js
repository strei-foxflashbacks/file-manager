import { argv, stdin, stdout } from 'node:process';
import commandListener from './commandListener.js';

const args = argv.slice(2);

const userEnter = async () => {
  try {
    const username = args.find((arg) => arg.startsWith('--username=')).split('=')[1];
    stdin.write(`Welcome to the File Manager, ${username}!\n\nPlease enter your command below:\n`);
    stdout.on('data', async (data) => {
      const command = data.toString().trim();
      await commandListener(command);
    })
  } catch {
    throw new Error('Entrance error: To run the app, type "npm run start --username=your_username"');
  }
}

export default userEnter;