const { chats } = require("./data/data");
const dotenv = require('dotenv')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => { 
    res.json(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const id = req.params.id;
    const singleChat = chats.find(chat => { chat._id === id });
    res.json(singleChat)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})