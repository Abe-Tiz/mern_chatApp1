const { chats } = require("./data/data");
const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors'); 
const connectDB = require("./config/db");
dotenv.config();
connectDB();
const app = express();

const port = process.env.PORT || 4000;


const userRoute = require('./routes/userRoute');
const chatRoute = require('./routes/chatRoute');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


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

app.get("/", (req, res) => {
    console.log(chats);
    res.json(chats);
   
});

app.use('/api/user', userRoute);
app.use('/api/chat', chatRoute);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})