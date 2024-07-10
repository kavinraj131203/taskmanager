

const express=require('express');
require('./db/connect')
const app=express();
const tasks=require('./routes/tasks')
const connectDb=require('./db/connect');
const notFound = require('./middleware/not-found');
require("dotenv").config()


app.use(express.static('./public'));


const port=5000;
app.use(express.json())
app.use('/api/v1/tasks',tasks);

app.use(notFound);

const start=async()=>{
    try{
    await connectDb(process.env.MONGO_URI);
    
app.listen(5000,()=>{
    console.log(`server listening at port no ${port}`);
})

    }
    catch(err){
        console.log(`${err}`)
    }

}

start();


