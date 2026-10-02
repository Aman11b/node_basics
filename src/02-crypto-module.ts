import crypto from "node:crypto";

// build in module
// security related task

// creating randownUUIA, Ids,secure token,hashing data,verify if data was chaged,encryption/decryption

// Universal unique identifier
// -> user id,order-id session id
const requestId = crypto.randomUUID();

console.log({ UUID: requestId });

// randomeBytes
//->  password reset token,email varification, sessionn secret, api keys

const resetToken = crypto.randomBytes(16).toString("hex");
console.log({ randomBytes: resetToken });

// createHash
// -> fix lenght string
// -> its one way

const text = "hello mello";
const hash = crypto.createHash("sha256").update(text).digest("hex");
console.log({ hash: hash });

// createHmac
// -> hash based message authetication code
// -> HMAC :data + secret -> signed hash
// webhook,signed token

const secret = "mey key";
const message = "user_id=1";

const signature = crypto
  .createHmac("sha256", secret)
  .update(message)
  .digest("hex");

console.log({ signature: signature });

const signatureVerify = crypto
  .createHmac("sha256", secret)
  .update(message)
  .digest("hex");

console.log("Signature is valid and matching", signature === signatureVerify);
