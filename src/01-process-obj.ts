// process obj-> has current nodejs program
// runtime info

// evn variables
// commnad lne arg
// exit code
// process lifecycle events

// read backend port from evn file
// read secrets- db urls pai keys password goodle auth secret
// read CLI args in script

import process from "node:process";

// dotenv-> read evns varibales

// const nodeEnv = process.env.NODE_ENV ?? "development";

// process.env will be undefined or string

// const port = Number(process.eventNames.PORT ?? 3000);

// process.argv[0] -> absolute path of node.js executable
//  process.argv[1] -> path of JS script being executed
// process.argv[2] -> onward custom input

const command = process.argv[2] ?? "start";

// fail flag
// crash flag

const shouldFail = process.argv.includes("--fail");
const shouldCrash = process.argv.includes("--crash");

// don not staty sync here
// node is alrady shutting down
// final log and cleanup

process.on("exit", (code) => {
  console.log(`Process finish with exit code ${code}`);
});

function runApp(): void {
  console.log({ command: command });

  if (shouldFail) {
    console.error("Manual failure triggered with --fail flag");
    process.exit(1);
  }

  if (shouldCrash) {
    console.error("Manual crash triggered with --crash flag");
    process.exit(1);
  }
}

runApp();
