const express = require('express');
const app = express();

// get request

app.get('/', (req,res)=>{
  res.send("<h1> I'm execute...<h1>")
  res.end()
})

// Establishing the port
const PORT = process.env.PORT || 5000;
 
// Executing the server on given port number
app.listen(PORT, console.log(
  `Server started on port ${PORT}`));