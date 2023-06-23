import { argv, stdin, stdout } from 'node:process';

const args = argv.slice(2);

const start = async () => {
  try {
    const username = args.find((arg) => arg.startsWith('--username=')).split('=')[1];
    stdin.write(`Welcome to the File Manager, ${username}!\n\nPlease enter your command below:\n`);
  } catch {
    throw new Error('Entrance error: To run the app, type "npm run start --username=your_username"');
  }
}

export default start;