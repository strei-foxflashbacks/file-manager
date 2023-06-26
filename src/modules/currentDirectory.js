import process from 'node:process';

const currentDirectory = () => {
  return new Promise((resolve) => {
    process.stdout.write(
      `\nYou are currently in ${process.cwd()}\nPlease enter your command below:\n`
      );
    resolve();
  })
}
export default currentDirectory;
