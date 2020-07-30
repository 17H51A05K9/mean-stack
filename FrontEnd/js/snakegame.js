var canvas=document.getElementById("snake");
var ctx=canvas.getContext("2d")
ctx.fillStyle = "black";
//ctx.fillRect(0,0,300,130);
ctx.font = "15px Georgia";
function drawBoard(){
    var bw=600,bh=400;
    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "black";
    context.stroke();
}

drawBoard();
