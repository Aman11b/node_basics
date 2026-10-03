import http, { type IncomingMessage, type ServerResponse } from "node:http";

const PORT = 3000;

// this will create low level htpp server
// callback will run for every incomming http request

// req-> request object
// method-get post put delete
// url-> path
// header-> metadata send by client
// request body

// res-> response object
// used by out server to send something to client
// statuscode, response header, response body

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method;

    // get-> reading data
    // post -> cretaing new data
    // put -> replacing data
    // patch -> updating partial data
    // delete -> deleting data

    const url = req.url;
    // on which path client is requesting

    const userAgent = req.headers["user-agent"];
    // header are metadata-extra data we send

    res.statusCode = 200;
    // set http status code
    // 200 -> req is successful

    res.setHeader("Content-Type", "text/plain");

    // finish the response,else browese keep waitin
    res.end(`BASIC HTTP NODE SERVER:${method}: ${url}: ${userAgent}`);
  },
);

server.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
