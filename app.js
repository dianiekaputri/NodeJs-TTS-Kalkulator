// import 
const express = require('express');
const app = express();
const port = 3000;

// static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/js',express.static(__dirname+'public/js'));

// set views
app.set('views','./views');
app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.render('index',{text: 'ini adalah TTS'})
});

app.get('/calc',(req,res)=>{
    res.render('calc',{text: 'ini adalah Kalkulator'})
});



// listen on port 3000
app.listen(port,()=>console.info(`listening on port ${port}`));