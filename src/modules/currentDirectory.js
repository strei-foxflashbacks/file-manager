import process from 'node:process';

const currentDirectory = async () => {
  process.stdin.write(
    `\nYou are currently in ${process.cwd()}\nPlease enter your command below:\n`
    );
}
export default currentDirectory;
