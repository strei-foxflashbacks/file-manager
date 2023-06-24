import { stdout } from 'node:process';
import exitApp from './exitApp.js';
import goToFolder from './navigation/goToFolder.js';
import goToParentFolder from './navigation/goToParentFolder.js';

const commandListener = async (command) => {
  const instructions = command.split(' ');
  switch (instructions[0]) {
    case '.exit':
      await exitApp();
      break;
    case 'cd':
      await goToFolder(instructions[1]);
      break;
    case 'up':
      await goToParentFolder()
      break;
    default:
      stdout.write('Operation failed\n');
  }
}
export default commandListener;