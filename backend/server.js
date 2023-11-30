const { chats } = require("./data/data");
const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors'); 
const connectDB = require("./config/db");
dotenv.config();
connectDB();
const app = express();



const port = process.env.PORT || 4000;


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
// Allow cross-domain requests
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}; 

app.use(allowCrossDomain);

app.get("/api/chat", (req, res) => {
    console.log(chats);
    res.json(chats);
   
});

app.get('/api/chat/:id', (req, res) => {
    const id = req.params.id;
    const singleChat = chats.find(chat =>  chat._id === id );
    res.json(singleChat)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})