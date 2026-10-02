// check cpu info, memory,home dir, temp dir

import * as os from "node:os";

function runOsDemo(): void {
  console.log("Platform", os.platform());
  console.log("Architecture", os.arch());
  console.log("Os Type", os.type());
  console.log("Os release", os.release());
  console.log("Home Dir", os.homedir());
  console.log("Temp Dir", os.tmpdir());
  const cpus = os.cpus();
  console.log("CPU", cpus.length);
  console.log(
    `CPU model: ${cpus[0]?.model} Speed: ${cpus[0]?.speed} Time: ${cpus[0]?.times} `,
  );
  console.log("Total memory", os.totalmem());
  console.log("Free memory", os.freemem());
}

runOsDemo();
