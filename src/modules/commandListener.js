import { stdout } from 'node:process';
import exitApp from './exitApp.js';

const commandListener = async (command) => {
  switch (command) {
    case '.exit':
      await exitApp();
      break;
    default:
      stdout.write('Operation failed\n');
  }
}
export default commandListener;