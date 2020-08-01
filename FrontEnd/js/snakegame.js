var canvas=document.getElementById("snake");
console.log(canvas)
var ctx=canvas.getContext("2d")
var scale=10;
var snake;
var tails=[]
var x=0,y=0,xspeed=scale,yspeed=0,x1,x2,rows=canvas.height/scale,cols=canvas.width/scale,total=0;
var RandomFruit=()=>{
    x1=(Math.floor(Math.random() * 10 +1)*scale); 
    x2=(Math.floor(Math.random() * 10 +1)*scale);
    //console.log(x1+" "+x2)
    // 
}
var fruitdraw=()=>{
   // 
    ctx.fillStyle="orange";
     ctx.fillRect(x1,x2,scale,scale);
}
var draw=(x,y)=>{
    //console.log("draw")
    ctx.fillStyle="green";
    for(var i=0;i<tails.length;i++)
    {
      ctx.fillRect(tails[i].x,tails[i].y,scale,scale);
      if(x==tails[i].x && y==tails[i].y)
       {
           alert("Game Over")
           window.location.reload();
       }
    }
    ctx.fillStyle="red"
    ctx.fillRect(x,y,scale,scale);
}
var update=(xs,ys)=>{
    for(var i=0;i<tails.length-1;i++)
    {
        tails[i]=tails[i+1];
    }
    tails[total-1]={x:this.x,y:this.y};
 x=x+xs;
 y=y+ys;
 if(x>=canvas.width)
 x=0;
 if(y>=canvas.height)
 y=0;
 if(x<0)
 x=canvas.width;
 if(y<0)
 y=canvas.height;
}
var Snake=()=>{
    RandomFruit();
    window.setInterval(()=>{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        fruitdraw();
        draw(x,y);
        //console.log(x+" "+y);
        update(xspeed,yspeed);
       if(x==x1 && y==x2)
       {
           total++;
        //console.log(x1+" "+x2);
           RandomFruit();
          // x=x1,y=x2;
          // draw(x1,x2)
          // console.log(x1+" "+x2);
       }
    },250);
}
var setup=(()=>{
   // console.log("hi")
   RandomFruit();
   Snake();
})();
window.addEventListener('keydown',(evt)=>{
    var d=evt.key.replace('Arrow','');
    switch(d)
    {
        case 'Up':
        xspeed=0;
        yspeed=scale*-1;
        break;
        case 'Down':xspeed=0;
        yspeed=scale*1;
        break;
        case 'Left':xspeed=scale*-1;
        yspeed=0;
        break;
        case 'Right':xspeed=scale*1;
        yspeed=0;
        break;
    }
})
var Up=()=>{
    xspeed=0;
    yspeed=scale*-1;  
}
var Left=()=>{
    xspeed=scale*-1;
        yspeed=0;
}
var Down=()=>{
    xspeed=0;
    yspeed=scale*1;
}
var Right=()=>{
    xspeed=scale*1;
        yspeed=0;
}