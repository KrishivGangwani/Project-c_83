var mouseevent="empty";

var lastx,lasty;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

colour="black";
width=1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    colour = document.getElementById("color").value;
    width= document.getElementById("width").value;

    mouseevent = "mousedown";
}


canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseevent = "mouseleave";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseevent = "mouseup";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;

        ctx.moveTo(lastx,lasty);
console.log("lastx,lasty is "+ lastx + "and "+ lasty);

ctx.lineTo(current_x,current_y);
console.log("current x,current y is"+current_x + "and"+ current_y);

ctx.stroke();
    }
    lastx = current_x;
    lasty = current_y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
var lastx,lasty;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

colour="black";
width=1;

swidth = screen.width;
newwidth = screen.width - 70;
newh = screen.height - 300;

if (swidth<992){
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newh;
    document.body.style.overflow = "hidden";
}



canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    colour = document.getElementById("color").value;
    width= document.getElementById("width").value;
    lastx = e.touches[0].clientX - canvas.offsetLeft;
    lasty = e.touches[0].clientY - canvas.offsetTop;

}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;

        ctx.moveTo(lastx,lasty);
console.log("lastx,lasty is "+ lastx + "and "+ lasty);

ctx.lineTo(current_x,current_y);
console.log("current x,current y is"+current_x + "and"+ current_y);

ctx.stroke();
    
    lastx = current_x;
    lasty = current_y;
}

//writing function for clear function//
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}