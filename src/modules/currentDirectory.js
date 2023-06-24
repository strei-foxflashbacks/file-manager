import { env, stdin } from 'node:process';

const currentDirectory = async () => {
  stdin.write(`\nYou are currently in ${env.directory}\n`);
}
export default currentDirectory;