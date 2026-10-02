// run code after delay, repeated code after interval

// setTimeout,setInterval,clearTimeout,clearInterval,setImmediate

import { error } from "node:console";
import { setTimeout as sleep } from "node:timers/promises";

function runSetTimeout(): void {
  console.log(`1. setTimeout example started`);

  setTimeout(() => {
    console.log("2. setTimeout runs after 1 sec");
  }, 1000);
  console.log("3. this runs immediatley. node dosnt't wait");
}

function runClearTimeout(): void {
  const timerID = setTimeout(() => {
    console.log("this will not run");
  }, 2000);

  clearTimeout(timerID);
  console.log("4. clearTimout cancelled the 2 sec timer");
}

// setIntercal will run callback again and again
function runSetInterval(): void {
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    console.log(`5. setInterval tick: ${count}`);

    if (count === 3) {
      clearInterval(intervalId);
      console.log("6. Set interval stopped");
    }
  }, 1000);
}

// setImmmediate runs whn current sync code finises
// wont waot for fixed timeout

function runSetImmediate(): void {
  setImmediate(() => {
    console.log("7. setImmediate callback");
  });
  console.log("8. synchornous code after setImmediate");
}

async function runPromiseTimer(): Promise<void> {
  console.log("9. waiting for promise based timer");
  await sleep(1500);
  console.log("10. promise based timer finished after 1.5 sec");
}

function runTimerDemo(): void {
  runSetTimeout();
  runClearTimeout();
  runSetInterval();
  runSetImmediate();
}

runTimerDemo();

runPromiseTimer().catch((error: unknown) => {
  console.log(error);
});
