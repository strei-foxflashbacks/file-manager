import { exit, env } from 'node:process';

const exitApp = async () => {
  console.log(`\nThank you for using File Manager, ${env.username}, goodbye!`);
  exit();
}
export default exitApp;