import os from 'os';

const getCpusInfo = async () => {
  const cpusAmount = os.cpus();
  console.log(`The overall amount of CPUS: ${cpusAmount.length}`)
  cpusAmount.forEach((cpu, i) => {
    const model = cpu.model;
    const speedInGHz = (cpu.speed / 1000).toFixed(2);
    console.log(
      `CPU #${i + 1}: Model: ${model}, Clock rate (in GHz): ${speedInGHz}`
      );
  });
}
export default getCpusInfo;
