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
app.listen(port,()=>{
    console.log('connected')
})
