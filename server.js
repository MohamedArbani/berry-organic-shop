const express = require('express');

const app = express();

const path = require('path');
const PORT = process.env.PORT || 5387;
const HOST = process.env.HOST || 'localhost';

app.use('/', express.static(path.join(__dirname,'frontend')));

app.get('', (req,res)=>{
    res.sendFile(path.join(__dirname,'frontend','index.html'));
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://${HOST}:${PORT}`);
});