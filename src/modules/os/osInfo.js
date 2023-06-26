import getCPUArchitecture from "./getCPUArchitecture.js";
import getCpusInfo from "./getCpusInfo.js";
import getEOL from "./getEOL.js";
import getHomeDir from "./getHomeDir.js";
import getSystemUsername from "./getSystemUsername.js";

const osInfo = async (flag) => {
  switch (flag) {
    case '--EOL':
      await getEOL();
      break;
    case '--cpus':
      await getCpusInfo();
      break;
    case '--homedir':
      await getHomeDir();
      break;
    case '--username':
      await getSystemUsername();
      break;
    case '--architecture':
      await getCPUArchitecture();
      break;
    default:
      console.log('Invalid input\n');
  }
}
export default osInfo;
