const express = require('express');
const app = express();
const PORT = 8080

app.get('/',(request,response)=>{
    response.send("hola mundo 2")
});


const listener = app.listen(process.env.PORT, () => {
console.log("puerto escuchando 2" + listener.address().port);
});