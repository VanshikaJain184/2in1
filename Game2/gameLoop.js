
/*  GAME LOOP
1 step: init
in a loop until gve is not over
        2 step: draw
        3 step: update */

//         game_over=false;
// button=document.getElementsById('playPause');
// function playPause()
// {
//     if(game_over===false)
//     game_over=true;
//     else{
//         game_over=false;
//     }

//}
function init()
{
    canvas=document.getElementById('mycanvas');
//canvas object is used to draw graphics

W=H=canvas.width=canvas.height=1000;

pen=canvas.getContext('2d')

game_over=false;

    rect={
        x:20,
        y:20,
        w:40,
        h:40,
        speed:10,
    }
     
}
function draw()
{
    pen.clearRect(0,0,W,H);
    pen.fillStyle="white" 
    pen.fillRect(rect.x,rect.y,rect.w,rect.h);
}
function update()
{
    rect.x+=rect.speed;
    //To oscillate
    if(rect.x>W-rect.w||rect.x<0)
    {
        rect.speed*=-1;
    }
}
function gameLoop()
{
    //to stop or break infinite loop we can use
if(game_over==true)
{
    clearInterval(f);

} 
    
    //calling these two functions again and again
    console.log("In game loop");
    draw();
    update();

}

init();

//call it after every 100 ms
var f= setInterval(gameLoop,100);





