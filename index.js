const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res)=>{
    res.send('server api running')
})
app.listen(port, ()=>{
    console.log('Server Running on port', port)
})