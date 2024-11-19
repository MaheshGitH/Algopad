import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    socket.on("roomId", (id) => {
      socket.join(id);
      function deviceCount(id) {
        const room = io.sockets.adapter.rooms.get(id);
        const deviceCount = room ? room.size : 0;

        io.to(id).emit("count", deviceCount);
      }

      deviceCount(id);

      socket.on("disconnect", () => {
        deviceCount(id);
      });

      socket.on("move", (cor) => {
        io.to(id).emit("move", cor);
      });

      socket.on("fingers", (value) => {
        io.to(id).emit("fingers", value);
      });
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
