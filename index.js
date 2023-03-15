const http = require("http");
const PORT = process.env.PORT || 3030;

http.createServer(function(request,response){
     
    response.end("Hello NodeJS!");
     
}).listen(PORT, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3030");
});


//***************************************************
// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3030;

// // your code

// app.listen(PORT, () => {
//   console.log(`server started on port ${PORT}`);
// });