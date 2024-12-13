// import { cpus } from 'os';
// import { Subject } from 'rxjs';
// import { MessageChannel,MessagePort,Worker } from 'worker_threads';
// export enum MessageType {
//   scanResult,
//   scan,
//   startup
// }
// export interface WorkerJob {
//   job: 'scan';
//   value: {
//     path: string;
//   };
// }

// export interface WorkerMessage {
//   type: MessageType;
//   value:
//     | {
//         results: Array<{
//           path: string;
//           isTarget: boolean;
//         }>;
//       }
//     | {
//         type: MessageType.scan;
//         value: {
//           path: string;
//         };
//       }
//     | {
//         type: MessageType.startup;
//         value: {
//           channel: MessagePort;
//           id: number;
//         };
//       };
// }

// export class ScanService {
//   private index = 0;
//   private workers: Worker[] = [];
//   private tunnels: MessagePort[] = [];

//   startScan(stream$: Subject<string>, path: string) {}

//   private listenEvents(stream$: Subject<string>) {
//     this.tunnels.forEach((tunnel) => {
//       tunnel.on('message', (msg: WorkerMessage) => {
//         this.newWorkerMessage();
//       });
//     });
//   }

//   private newWorkerMessage(message: WorkerMessage, stream$: Subject<string>) {
//     const { type, value } = message;

//     if (type === MessageType.scanResult) {
//       const results: Array<{ path: string; isTarget: boolean }> = value.results;

//       results.forEach((result) => {
//         const { path, isTarget } = result;
//         if (isTarget) {
//           stream$.next(path);
//         } else {
//           this.addJob({
//             job: 'scan',
//             value: { path }
//           });
//         }
//       });
//     }
//   }

//   private initWorkers(): void {
//     const size = this.getPoolSize();
//     for (let index = 0; index < size; index++) {
//       const { port1, port2 } = new MessageChannel();
//       const worker = new Worker('./');
//       worker.postMessage(
//         {
//           type: MessageType.startup,
//           value: {
//             channel: port2,
//             id: index
//           }
//         },
//         [port2]
//       );
//       this.workers.push(worker);
//       this.tunnels.push(port1);
//     }
//   }

//   private getPoolSize() {
//     return cpus().length;
//   }

//   private addJob(job: WorkerJob) {
//     if (job.job === 'scan') {
//       const tunnel = this.tunnels[this.index];
//       const message: WorkerMessage = { type: MessageType.scan, value: job.value };
//       tunnel.postMessage(message);
//       this.index = this.index >= this.workers.length - 1 ? 0 : this.index + 1;
//     }
//   }
// }
