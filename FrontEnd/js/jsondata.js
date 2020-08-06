$("#json").click(()=>{
    $.get('/jsondata',(data,status)=>{
       console.log(status)
        if(status=="success")
       {
        var html="";
           html=html+"<div><table id=\"jsontable\"><tr><th>Name</th><th>Age</th></tr>";
          for(let i=0;i<data.length;i++)
          {
            html=html+"<tr><td>"+data[i].name+"</td><td>"+data[i].age+"</td></tr>";
          }
       
            html=html+"</table></div>"
           $("body").append(html)
       }
    })
})
