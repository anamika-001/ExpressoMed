const mongoose =require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useCreateIndex: true,useUnifiedTopology: true, useNewUrlParser: true } , (err) =>{
    if(!err){
        console.log('succeeded');
    }else{
        console.log('error:'+ JSON.stringify(err,undefined,2));
    }
});

require('./user.model');

