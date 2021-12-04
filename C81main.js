canvas=document.getElementById("My_cavas");
ctx=canvas.getContext("2d");

ctx.lineWidth=2 
ctx.beginPath()
ctx.storkeStyle="black"
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke()

ctx.lineWidth=3
ctx.beginPath()
ctx.storkeStyle="red"
ctx.arc(400,400,90,0,2*Math.PI);
ctx.stroke()

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mosusex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
    circle(mosusex,mousey)
}
function circle(mosusex,mousey){
    ctx.lineWidth=3
    ctx.beginPath()
    ctx.storkeStyle="red"
    ctx.arc(mosusex,mousey,90,0,2*Math.PI);
    ctx.stroke()
}