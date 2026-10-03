import http, { type IncomingMessage, type ServerResponse } from "node:http";

const PORT = 3000;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method ?? "GET";

    // path requested by client
    // http://locakhost:3000/users -> req.url = /users
    const requestUrl = new URL(
      req.url ?? "/",
      `http:${req.headers.host}
        `,
    );
    const pathName = requestUrl.pathname;

    res.setHeader("Content-type", "text/plain");

    if (method === "GET" && pathName === "/health") {
      res.statusCode = 200;
      res.end("Server is healthy");
      return;
    }

    if (method === "GET" && pathName === "/user") {
      res.statusCode = 200;
      res.end("List of user");
      return;
    }

    if (method === "POST" && pathName === "/user") {
      res.statusCode = 201;
      res.end("user created sucessfully");
      return;
    }

    res.statusCode = 404;
    res.end("route not found");
  },
);

server.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
