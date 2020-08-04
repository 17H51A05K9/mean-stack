var bodyhtml=""
bodyhtml=bodyhtml+"<table id=\"tumbo\">";
var c=1;
for(let i=0;i<10;i++)
{
  bodyhtml=bodyhtml+"<tr>";
  for(let j=0;j<10;j++)
  {
    bodyhtml=bodyhtml+"<td id="+c+"\">";
    bodyhtml=bodyhtml+c+"</td>";
    c++
  }
  bodyhtml=bodyhtml+"</tr>";
}
var arr=[]
while(arr.length < 100){
  var r = Math.floor(Math.random() * 100) + 1;
  if(arr.indexOf(r) === -1) arr.push(r);
}
var back="<form action=\"/\"><button type=\"submit\" class=\"btn btn-default\" id=\"button12\">Back</button></form>";
var start="<div id=\"but\"><button type=\"submit\" class=\"btn btn-default\" id=\"button1\" onclick=\"Start()\">StartNewGame</button></div>";
$("body").append(bodyhtml)
$("body").append(start)
$("body").append(back)
var tumbola=()=>{
  var i=0;
  window.setInterval(()=>{
      var ele=arr[i];
     $("h1").html(ele)
    // arr.push(ele)   
     var k1=ele.toString();
     if(k1.length==3)
            {
              document.getElementById("tumbo").rows[9].cells[9].style.backgroundColor="green"
            }
            else if(k1.length==2 && k1[1]=='0')
            {
              document.getElementById("tumbo").rows[k1[0]-'0' -1].cells[9].style.backgroundColor="green"
            }
           else if(k1[0]==1  && k1.length==2)
           {
            document.getElementById("tumbo").rows[1].cells[k1[1]-'0' -1].style.backgroundColor="green"
           }
           else if(k1.length==2){
            document.getElementById("tumbo").rows[k1[0]-'0'].cells[k1[1]-'0' -1].style.backgroundColor="green"
           }
           else{
            document.getElementById("tumbo").rows[0].cells[k1[0]-'0' -1].style.backgroundColor="green"
           }
          i++;
          
  },1000);
};
tumbola()
var Start=()=>{
  window.location.reload();
}