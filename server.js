var express=require('express')
const config=require('./backend/DB/config')
const mongodb=require('./backend/DB/dbconnect')
const formmodel=require('./backend/models/form')
var bodyParser = require('body-parser')
mongodb.connect
var app=express();
  app.use(express.static(__dirname+'/FrontEnd'))
  app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
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
  var jsondata=[{name:"praveen",age:20},{name:"sai",age:20},{name:"akash",age:20}]
  app.get('/jsondata',(req,res)=>{
    res.send(JSON.stringify(jsondata))
  })
  app.get('/jsondataindex',(req,res)=>{
    res.sendFile(__dirname+'/FrontEnd/html/jsondata.html')
  })
  app.get('/form',(req,res)=>{
      res.sendFile(__dirname+'/FrontEnd/html/form.html')
  })
  app.post('/submitdata',async(req,res)=>{
    var form=new formmodel(req.body);
    await form.save().then((data)=>{
        res.send(JSON.stringify(data))
    }).catch((e)=>{
      console.log(e)
    })
  })
  app.get('/getallusers',async(req,res)=>{
        var allusers=await formmodel.find({}).then((data)=>{
              res.send(JSON.stringify(data))
        }).catch(e=>{
          console.log(e)
        })
  })
app.listen(config.port,()=>{
    console.log('connected')
})
