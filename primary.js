import cluster from "cluster";
import os from "os";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const cpuCount = os.cpus().length;

console.log(`Number of CPUs: ${cpuCount}`);
console.log(`Primary pid=${process.pid}`);

cluster.setupPrimary({
  exec: _dirname + "/index.js",
});
for (let i = 0; i < cpuCount; i++) {
  cluster.fork();
}
cluster.on("exit", (Worker, code, signal) => {
  console.log(`Worker ${Worker.process.pid} has been killed`);
  console.log(`starting another worker`);
  cluster.fork();
});
