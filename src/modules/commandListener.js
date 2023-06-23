import { stdout } from 'node:process';

const commandListener = async (command) => {
  switch (command) {
    case '.exit':
      console.log('exiting...\n');
      break;
    default:
      stdout.write('Operation failed\n');
  }
}
export default commandListener;