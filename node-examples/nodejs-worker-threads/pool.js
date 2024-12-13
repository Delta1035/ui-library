import os from 'node:os';
import { MessageChannel, Worker } from 'node:worker_threads';
console.log('核心数>>',os.cpus().length);
const poolSize = os.cpus().length;

const workers = [];
const tunnels = [];
for (let index = 0; index < poolSize; index++) {
  const { port1, port2 } = new MessageChannel();
  const worker = new Worker('./pool-worker.js');
  worker.postMessage(
    {
      type: 'startup',
      id: index,
      channel: port2
    },
    [port2]
  );
  tunnels.push(port1);
  workers.push(worker);
}

for (let index = 0; index < tunnels.length; index++) {
  const tunnel = tunnels[index];
  tunnel.on('message', (msg) => {
    console.log(`线程${msg.id} 计算出了结果${msg.res}`);
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let curIndex = 0;

function addJob(num) {
  const tunnel = tunnels[curIndex];
  tunnel.postMessage({
    value: num
  });
  curIndex = curIndex >= workers.length - 1 ? 0 : curIndex + 1;
}

for (let index = 0; index < 100; index++) {
  addJob(Math.floor(Math.random() * 1000000));
}
