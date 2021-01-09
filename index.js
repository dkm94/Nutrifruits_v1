const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const path = require('path');

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = process.env.PORT;
// const PORT = 3001;

const router = require("./router");
const users = require("./users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  console.log("port" + PORT + "en écoute")
});

// io.on('connection', (socket) => {

//   socket.on('join', ({name, room}, callback) => {
//     const {error, user} = addUser({id:socket.id, name, room})

//     if(error){
//       return callback(error);
//     }else{
//       //emettre les messages relatif a la room
//       socket.emit('message', { user : 'admin', text:`${user.name}, welcome to the room ${user.room}`});

//       //envoie un message  a tous les utilisateurs en plus de l'utilisateur connecté
//       socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${user.name}, has joined!`});

//       // ajoute le user a la room
//       socket.join(user.room)

//       callback();
//     }

//   })

//   //les messages du chat ( attends la fonction emit du front qui porte le même nom)
//   socket.on('sendMessage', (message, callback)=>{
//     const user = getUser(socket.id);

//     io.to(user.room).emit('message', { user : user.name, text:message});

//     callback();
//   } )

//   socket.on('disconnect', ()=>{
//     console.log('User has left !!');
//   })
// })

// app.use(router);

io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

server.listen(PORT, () => console.log(`Server has started on server ${PORT}`));
