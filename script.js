// set up canvas and context

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height =window.innerHeight;
// global composite operation
ctx.globalCompositeOperation = 'destination-over';
/* ------- drawing some shapes ------
// some setup for stroke and fill
ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';
ctx.lineWidth =5
// --------draw circle------

ctx.beginPath();
// arc(x,y,radius,start angle, finish angle ), angles in radials 
ctx.arc(300,300,100,0 ,Math.PI*2);
ctx.closePath();

// stroke and fill but be sure to set style
ctx.fill();
ctx.stroke();

// stroke has to come after rect. 
ctx.rect(canvas.width/2,canvas.height/2,100,100);
ctx.stroke();
ctx.fill();
// funny that stroke and fill are attributes that you add to an 
// already declared shape.  this is the opposite of p5
*/
//----------How to get an animation loop (like draw() in p5)----------------//
// it works on recursion 

 
let number =0;
let scale =10;
let scaleSpeed = 10;
let angOff =137.5; // number from http://algorithmicbotany.org/papers/abop/abop-ch4.pdf
let angle =0;

function drawFlower(){
    // --------draw circle------
    angle += angOff * (Math.PI/180)
    
    let radius = scale * Math.sqrt(number);
    // cartesian to polar coordinates x = r * cos(theta) , y= r * sin(theta)
    // switching them reverses the direction, more like a math graph than a computer graph

    let posX = radius * Math.sin(angle) +canvas.width/2;
    let posY = radius * Math.cos(angle) +canvas.height/2;
    ctx.fillStyle = `hsl(${number},100%,50%`;
    ctx.strokeStyle = 'black';
    ctx.lineWidth =4;

    ctx.beginPath();
    // arc(x,y,radius,start angle, finish angle ), angles in radials 
    ctx.arc(posX,posY,scale,0 ,Math.PI*2);
    ctx.closePath();
    // need to call stroke and or fill
    ctx.fill();
    ctx.stroke();

    number++;
    if (number%400 ==0){
        ctx.clearRect(0,0, canvas.width,canvas.height);
        number =0;
        //angOff+=0.;
        scale+=scaleSpeed;
        if (scale > 50 || scale <20 ){ // like ball
            scaleSpeed *=-1;

        }
        

    }
    

}

function animate(){
    //draw each frame

    // clear each frame
    //ctx.clearRect(0,0, canvas.width,canvas.height);
    
     
     

    drawFlower();

    // loop it 
    requestAnimationFrame(animate);
}

animate();




