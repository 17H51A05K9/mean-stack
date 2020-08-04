var express=require('express')
var app=express();
var port=process.env.PORT || 3000
app.use(express.static(__dirname+'/FrontEnd'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/FrontEnd/html/index.html')
  })
  app.get('/resume',(req,res)=>{
    res.sendFile(__dirname+'/FrontEnd/html/texttag.html')
  })
  app.get('/canvas',(req,res)=>{
    res.sendFile(__dirname+'/FrontEnd/html/canvasclock.html')
  })
  app.get('/snakegame',(req,res)=>{
    res.sendFile(__dirname+'/FrontEnd/html/snakegame.html')
  })
  app.get('/tambola',(req,res)=>{
    res.sendFile(__dirname+'/FrontEnd/html/tumbola.html');
  })
app.listen(port,()=>{
    console.log('connected')
})
