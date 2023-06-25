import process from 'node:process';

const getCPUArchitecture = async () => {
  const CPUArchitecture = process.arch;
  console.log(CPUArchitecture);
}
export default getCPUArchitecture;
