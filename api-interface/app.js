const path = require("path");
const express = require("express");
const mockjs = require("express-mockjs");
const SocketServer = require('ws').Server

// req.body for 'POST'
let bodyParser = require("body-parser");

const port = 8151;
const wsPort = 8787;
let app = express();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method == "OPTIONS") {
    res.send(200);
  } else {
    setTimeout(next, 0)
  }
});

app.use(bodyParser.json()); // for parsing application/json
app.use(
  bodyParser.urlencoded({
    extended: true
  })
); 

app.use("/api", mockjs(path.join(__dirname, "mocks")));


const server = app.listen(port);

server.on("listening", () => {
  console.log(`Listening on http://localhost:${port}/api`);
});


//創建 express 的物件，並綁定及監聽 3000 port ，且設定開啟後在 console 中提示
const wsApp = express()
const wsServer = wsApp.listen(wsPort);
wsServer.on("listening", () => console.log(`Listening on wss://localhost:${wsPort}`))
//將 express 交給 SocketServer 開啟 WebSocket 的服務
const wss = new SocketServer({port: 8000})

//當 WebSocket 從外部連結時執行
wss.on('connection', ws => {

    //連結時執行此 console 提示
    console.log('Client connected')

    const redpack = {
      type: 1,
      money: 100,
      msg: '恭喜發財'
    }

    //固定送最新時間給 Client
    const sendNowTime = setInterval(()=>{
      
      ws.send(JSON.stringify(redpack))
    }, 100000)

    //當 WebSocket 的連線關閉時執行
    ws.on('close', () => {
        console.log('Close connected')
    })
})