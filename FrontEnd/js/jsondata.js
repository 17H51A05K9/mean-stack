$("#json").click(()=>{
    $.get('/jsondata',(data,status)=>{
       console.log(status)
        if(status=="success")
       {
       var k=JSON.parse(data)
        var html="";
           html=html+"<div><table id=\"jsontable\"><tr><th>Name</th><th>Age</th></tr>";
          for(let i=0;i<k.length;i++)
          {
            html=html+"<tr><td>"+k[i].name+"</td><td>"+k[i].age+"</td></tr>";
          }
            html=html+"</table></div>"
           $("body").append(html)
       }
    })
})
