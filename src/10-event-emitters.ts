// will use when one is telling and other is listening

import { EventEmitter } from "node:stream";

// user registered -> send a welcome email, write a log
// -> emitter will emit event and listener will listen to it and do something

// .on()-> register one listener
// .once()-> register one listen that runs once
// .emit()-> trigger event and send to listene

const appEvents = new EventEmitter();

type UserRegisterPayload = {
  id: number;
  email: string;
};

appEvents.on("user:registered", (user: UserRegisterPayload) => {
  console.log("email->", user.email);
});
appEvents.on("user:registered", (user: UserRegisterPayload) => {
  console.log("id -> ", user.id);
});

appEvents.once("app.start", () => {
  console.log("once listener: app started");
});

function registerUser(): void {
  const user = {
    id: 1,
    email: "hehe@gamil.com",
  };
  console.log("user saved");

  appEvents.emit("user:registered", user);
  console.log("Register user:event listener completed");
}

registerUser();

appEvents.emit("app.start");
appEvents.emit("app.start");
