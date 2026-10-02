// build and read file path

// bad paractice-> root+"/update"+filename

import path from "node:path";

// path.join-> uses the correct seperator for current os
// -> /user/aman or c:\user\aman
// -> process.cwd -> current working dir -> folder whihc starts node

const projectRoot = process.cwd();
console.log(projectRoot);

// uploads/user/42/profile.photo.png

const userId = "45";
const originalName = "profile.photo.png";
const uploadFilePath = path.join(
  projectRoot,
  "uploads",
  "user",
  userId,
  originalName,
);
// imp -> path .join -> creas a path string
// it will not create folder
// it wont check if file exixts or not
console.log({ uploadFilePath: uploadFilePath });

// final part of path
const fileName = path.basename(uploadFilePath);
console.log({ fileName: fileName });

const fileExtention = path.extname(uploadFilePath);
console.log({ fileExtention: fileExtention });

const parentFolder = path.dirname(uploadFilePath);
console.log({ parentFolder: parentFolder });
