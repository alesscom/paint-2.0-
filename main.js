canvas=document.getElementById("micanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line =1;
var eventoraton ="empty";
var ultimaposicionX,ultimaposicionY;
canvas.addEventListener("mousedown", mimousedown);
function mimousedown(e){
    color=document.getElementById("color").value;
    width_of_line =document.getElementById("width_of_line").value;
    eventoraton="mouseDown";
}
canvas.addEventListener("mousemove", mimousemove);
function mimousemove(e){
    actualposicionmouseX = e.clientX - canvas.offsetLeft;
    actualposicionmouseY = e.clientY - canvas.offsetTop;
    if (eventoraton =="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth =width_of_line;
        console.log("ultima posicion de las coordenadas x, y= ");
        console.log("x =" + ultimaposicionX + "y = " + ultimaposicionY);
        ctx.moveTo(ultimaposicionX, ultimaposicionY);
        console.log("actual posicion de las coordenadas x, y= ");
        console.log("x =" + actualposicionmouseX + "y = " + actualposicionmouseY);
        ctx.lineTo(actualposicionmouseX, actualposicionmouseY);
        ctx.stroke();
    }
    ultimaposicionX = actualposicionmouseX;
    ultimaposicionY = actualposicionmouseY;
}
canvas.addEventListener("mouseup", mimouseup);
function mimouseup(e){
    eventoraton = "mouseUP";
}
canvas.addEventListener("mouseleave", mimouseleave);
function mimouseleave(e){
    eventoraton = "mouseleave";
}
function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}