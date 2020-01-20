const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);

Socketio.on("connection", (socket) => {
  socket.on("message", (data) => {
    socket.join(data.room); // room is being created for taking message from user who has already joined this room
    Socketio.in(data.room).emit("message", data);
  });
});

Http.listen(3000, () => {
  console.log("listenn");
});
