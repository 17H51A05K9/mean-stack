module.exports={
    url:process.env.MONGO||"mongodb://localhost:27017/Forms",
    port:process.env.PORT || 3000,
    options:{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}