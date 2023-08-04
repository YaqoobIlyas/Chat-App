var express = require("express");
var dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require("./config/db");
const userRoutes=require("./routes/userRoutes")
const chatRoutes=require("./routes/chatRoutes")
dotenv.config();
connectDB();
var app = express();

app.use(express.json());
app.use(cors());
app.use(
 cors({
 origin:'*',
 credentials: true
 })
)
app.use(cors({
 methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.get('/', (req, res) => {
    res.send("APi Is Runing");
})
app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)
const PORT=process.env.PORT || 5000
 
app.listen(5000, console.log(`Server started on port ${PORT}`));

