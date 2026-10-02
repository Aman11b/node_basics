// fs-file system
// create folder,write,read,check info, delet file

import fs from "node:fs";
import path from "node:path";
import fsPromises from "node:fs/promises";

// -> types
// sync API ->fs.readfileSync
// callabck API ->
// Promise API ->

//use-> small startup scripts,build ,local demos
//dont use-> http handlers,high traffic,bg jobs

const DEMO_FOLDER_PATH = path.join(process.cwd(), "file-system", "fs-demo");
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, "sync-note.txt");
const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH, "callback-note.txt");
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH, "promise-note.txt");

type FileResult = {
  style: string;
  fileName: string;
  content: string;
  sizeInBytes: number;
};

function ensureDemoFilderExist(): void {
  if (!fs.existsSync(DEMO_FOLDER_PATH)) {
    fs.mkdirSync(DEMO_FOLDER_PATH, { recursive: true });
  }
}

// Sync API
function runSyncExample(): FileResult {
  //   write content to a file
  fs.writeFileSync(SYNC_FILE_PATH, "cretaed using sync file system", "utf-8");

  //   append
  fs.appendFileSync(SYNC_FILE_PATH, "appended sync", "utf-8");

  //   read
  const content = fs.readFileSync(SYNC_FILE_PATH, "utf-8");

  const stats = fs.statSync(SYNC_FILE_PATH);

  return {
    style: "sync",
    content,
    fileName: path.basename(SYNC_FILE_PATH),
    sizeInBytes: stats.size,
  };
}

// callback API
function runCallbackExample(): Promise<FileResult> {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      CALLBACK_FILE_PATH,
      "created usoing callback fs",
      "utf-8",
      (writeError) => {
        if (writeError) {
          reject(writeError);
          return;
        }

        fs.appendFile(
          CALLBACK_FILE_PATH,
          " append using callback fs",
          "utf-8",
          (appendError) => {
            if (appendError) {
              reject(appendError);
              return;
            }

            fs.readFile(CALLBACK_FILE_PATH, "utf-8", (readError, content) => {
              if (readError) {
                reject(readError);
                return;
              }

              fs.readFile(CALLBACK_FILE_PATH, "utf-8", (readError, content) => {
                if (readError) {
                  reject(readError);
                  return;
                }

                fs.stat(CALLBACK_FILE_PATH, (statError, stats) => {
                  if (statError) {
                    reject(statError);
                    return;
                  }

                  resolve({
                    style: "callback",
                    content,
                    sizeInBytes: stats.size,
                    fileName: path.basename(CALLBACK_FILE_PATH),
                  });
                });
              });
            });
          },
        );
      },
    );
  });
}

// Promise API

async function runPromiseExample(): Promise<FileResult> {
  await fsPromises.writeFile(
    PROMISE_FILE_PATH,
    "Created using promise api",
    "utf-8",
  );
  await fsPromises.appendFile(
    PROMISE_FILE_PATH,
    "appended using promise api",
    "utf-8",
  );

  const content = await fsPromises.readFile(PROMISE_FILE_PATH, "utf-8");
  const stats = await fsPromises.stat(PROMISE_FILE_PATH);

  return {
    style: "Promise",
    content,
    sizeInBytes: stats.size,
    fileName: path.basename(PROMISE_FILE_PATH),
  };
}

async function main(): Promise<void> {
  try {
    ensureDemoFilderExist();
    const syncResult = runSyncExample();
    const callbackResult = await runCallbackExample();
    const PromiseResult = await runPromiseExample();

    console.log([syncResult, callbackResult, PromiseResult]);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.log(message);
  }
}
main();
