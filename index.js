const express = require('express');
const path = require('path');
const open = require('open');
require('dotenv').config()

// set PORT to serve files
var port = process.env.PORT || 3000;

// start express server
const app = express();

// set home route
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'src/index.html'));
});
// set app to listen to port
app.listen(port,(err)=>{
  if (err){
    console.log(err);
  }else{
    open(`http:localhost:${port}`);
  }
})
