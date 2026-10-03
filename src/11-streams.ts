// data handling piece by piece in small chunks
// read large file,upload file,downlode file,audio-video processing,compression

import { Readable, Transform, Writable } from "node:stream";

import { pipeline } from "node:stream/promises";

// data will be get in CHUNKS

// memory efficient

// stream types
// -> readable stream-> source of data
// -> writable stream -> write data
// -> transform stream -> read and change and pass it forword data

const readableStream = Readable.from(["hello", "from", "nodejs", "streams"]);

const uppercaseTransform = new Transform({
  transform(chunk, _encoding, callback) {
    const text = chunk.toString();
    callback(null, text.toUpperCase());
  },
});

const writableStream = new Writable({
  write(chunk, _encoding, callback) {
    console.log("received chunk", chunk.toString());
    callback();
  },
});

async function main(): Promise<void> {
  try {
    await pipeline(readableStream, uppercaseTransform, writableStream);
    console.log("strem completed");
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.log(message);
  }
}

main();
