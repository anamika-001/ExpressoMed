require('./config/config');
require('./models/db');


const express=require('express');
const bodyParser = require('body-parser');
const cors= require('cors');

const rtsIndex = require('./routers/index.router')
var app = express();
// const mongoose =require('mongoose');
// mongoose.connect(mo)
mongoose.Promise=global.Promise;
//middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api',rtsIndex);

const message = require('./models/message');
const mongoose = require('mongoose');
//'/api/register'

//error handler
app.use((err,req,res,next)=>{
    if(err.name=='ValidationError'){
        var valErrors=[];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
            
});
//get and post message
app.get('/api/chat', (req, res) => {
    Message.find().then(rec => {
      if(rec) {
        res.send(rec)
      } else {
        res.send([])
      }
    })
  })
  app.post('/api/chat', (req, res) => {
    const newMessage = new Message({
      _id: mongoose.Types.ObjectId(),
      message: req.body.message,
      user: 'user'
    })
    newMessage.save().then(rec => {
      if(rec) {
        res.send(rec)
      } else {
        res.send([])
      }
    })
  })





    

//start server
app.listen(process.env.PORT,() => console.log("server started at PORT :"+process.env.PORT));
