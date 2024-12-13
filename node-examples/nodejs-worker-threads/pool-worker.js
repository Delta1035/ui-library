import { parentPort } from 'node:worker_threads';

function calc(num) {
  let total = 0;
  for (let index = 0; index < num; index++) {
    total += 1;
  }
  return total;
}

let tunnel;
let id;

parentPort.on('message',msg=>{
    if(msg.type=='startup'){
        id = msg.id;
        tunnel = msg.channel;
        tunnel.on('message',_msg=>{
            tunnel.postMessage({
                id,
                res:calc(_msg.value)
            })
        })
    }
})
