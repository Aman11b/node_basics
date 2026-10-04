import http, { IncomingMessage, ServerResponse } from "node:http";

const PORT = 3002;

type User = {
  id: number;
  name: string;
  email: string;
};

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
};

const user: User[] = [
  { id: 1, name: "h1", email: "a@gamil" },
  { id: 2, name: "h2", email: "b@gamil" },
];

function sendJson<T>(
  res: ServerResponse,
  statuCode: number,
  body: ApiResponse<T>,
): void {
  res.statusCode = statuCode;

  res.setHeader("Content-type", "application/json");

  res.end(JSON.stringify(body));
}

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method ?? "GET";
    const requestUrl = new URL(req.url ?? "/", `http:${req.headers.host}`);
    const pathName = requestUrl.pathname;

    if (method === "GET" && pathName === "/") {
      sendJson(res, 200, {
        success: true,
        message: "Surver is running",
        data: {
          routes: ["GET/users"],
        },
      });

      return;
    }

    if (method === "GET" && pathName === "/users") {
      sendJson(res, 200, {
        success: true,
        message: "user fetched successfully",
        data: user,
      });

      return;
    }

    sendJson<null>(res, 404, {
      success: false,
      message: `Route not found`,
      error: `${method} ${pathName} not found`,
    });
  },
);

server.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
