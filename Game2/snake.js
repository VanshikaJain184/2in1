/*1 step: init
in a loop until gve is not over
        2 step: draw
        3 step: update */

function init()
{
    canvas=document.getElementById('myCanvas');
    W=canvas.width=800;
    H=canvas.height=800;
    game_over=false;
    cellSize=50;
    score=0;
//create food image
    food_img=new Image();
    food_img.src="D:/Projects/HTML CSS JAVASCRIPT/Canvas/apples.jpg";

    food=getrandomFood();
    
    pen=canvas.getContext('2d');

    pen.fillStyle="white";

    

    snake={
        init_len:5,
        color:"white",
        cells:[],
        direction:"right",

        createSnake:function(){
            for(var i=this.init_len;i>0;i--)
            {
                this.cells.push({x:i,y:0});
            }
        },
        

        drawSnake:function(){
          for(var i=0;i<this.cells.length;i++)
          {
            pen.fillStyle=this.color;//whatever is color of sanke
            pen.fillRect(this.cells[i].x*cellSize,this.cells[i].y*cellSize,cellSize-3,cellSize-3);
          }
           
        },

        updateSnake: function()
        {

            //check if snake has eaten food then increase its size
            // and generate new food
            var headX=this.cells[0].x;
            var headY=this.cells[0].y;

            if(headX==food.x&&headY==food.y)
            {

                food=getrandomFood();
                score+=5;
            }
            else{
                this.cells.pop();
            }

           
            
            var nextX,nextY;

            if(this.direction=="right")
            {
                nextX=headX+1;
                nextY=headY;
                
            }
            else if(this.direction=="left")
            {
                nextX=headX-1;
                nextY=headY;
            }
            else if(this.direction=="up")
            {
                nextX=headX;
                nextY=headY-1;
            }
            else if(this.direction=="down"){
                nextX=headX;
                nextY=headY+1;
            }

           
            this.cells.unshift({x:nextX,y:nextY})
            

            //prevent snake from destroying from boundaries

            var last_x=Math.round(W/cellSize);
            var last_y=Math.round(H/cellSize);

            if(nextX<0||nextY<0||nextX>last_x||nextY>last_y)
            {
                // alert("pakd");
                game_over=true;
                return;
            }


        },

      
    };

    function keyPressed(e)
    {
       if(e.key=="ArrowRight")
       {
           snake.direction="right";

       }
       else if(e.key=="ArrowLeft")
       {
           snake.direction="left";
       }
       else if(e.key=="ArrowUp")
       {
           snake.direction="up";
       }
       else if(e.key=="ArrowDown"){
        snake.direction="down";
       }
    //    console.log(snake.direction);
    }
      //adding event listener to control from keyboard
      document.addEventListener('keydown',keyPressed);
    snake.createSnake();
}

function draw()
{
    //erase old screen
    pen.clearRect(0,0,W,H);
    snake.drawSnake();
    //food.draw();
    pen.fillStyle=food.color;
    pen.drawImage(food_img,food.x*cellSize,food.y*cellSize,cellSize-3,cellSize-3);
    pen.fillStyle="white"
    pen.font="50px Roboto"
    pen.fillText(score,100,100)
}
function update()
{
    snake.updateSnake();
}

function getrandomFood()
{
    var foodX=Math.round(Math.random()*(W-cellSize)/cellSize);
    var foodY=Math.round(Math.random()*(H-cellSize)/cellSize);
    var food={
        x:foodX,
        y:foodY,
        color:"red",
    }
    return food;

}

function gameLoop()
{
    if(game_over==true)
    {
        
        clearInterval(f);
        alert("O no! Game over");
        return;
    } 
    draw();
    update();
}


init();
var f=setInterval(gameLoop,100);
