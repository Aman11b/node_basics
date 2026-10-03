// buffers -> raw binary data,string only for normal text
// binary data when data stored in bytes

// reading files,receiving http req bodies,working with streams, hamdling images pdf files videos

// string- human readable text
// buffer - raw bytes

const textBuffer = Buffer.from("Node");
// N-> 4e o-> 6f
console.log(textBuffer);

console.log(textBuffer.toString("utf-8"));

const engBuffer = Buffer.from("hello");
console.log(engBuffer.length);

// allocation-> fixed buffer
const fixedBuffer = Buffer.alloc(5);
console.log("empty fixed buffer", fixedBuffer);

fixedBuffer.write("API");
console.log(
  "Wrote in fixed buffer",
  fixedBuffer,
  "to string->",
  fixedBuffer.toString(),
);

// data in chunks

const chunks = [Buffer.from("hello "), Buffer.from("Node"), Buffer.from(" js")];
const combineBuffer = Buffer.concat(chunks);
console.log(
  "Combined Buffer -> ",
  combineBuffer,
  "into string -> ",
  combineBuffer.toString("utf-8"),
);
