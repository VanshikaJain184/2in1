score=0;
cross=true;
/*document.addEventListener('keydown', function(event) {
  alert(event.keyCode);
});*/

document.onkeydown=function(e){
	//alert(e.keyCode);
	if(e.keyCode==38){
		boy=document.querySelector('.boy');
		boy.classList.add('animateBoy');
		setTimeout(()=>{
			boy.classList.remove('animateBoy');
			},700);
	}

	if(e.keyCode==39){
		boy=document.querySelector('.boy');
		boyX=parseInt(window.getComputedStyle(boy,null).getPropertyValue('left'));
		boy.style.left=boyX+224+"px";
	}
	if(e.keyCode==37){
		boy=document.querySelector('.boy');
		boyY=parseInt(window.getComputedStyle(boy,null).getPropertyValue('left'));
		boy.style.left=(boyY-112)+"px";
	}
}

setInterval(()=>{
	boy=document.querySelector('.boy');
	gameOver=document.querySelector('.gameOver');
	dinasour=document.querySelector('.dinasour');
	
	bx=parseInt(window.getComputedStyle(boy,null).getPropertyValue('left'));
	by=parseInt(window.getComputedStyle(boy,null).getPropertyValue('top'));
	
	dx=parseInt(window.getComputedStyle(dinasour,null).getPropertyValue('left'));
	dy=parseInt(window.getComputedStyle(dinasour,null).getPropertyValue('top'));
	
	offsetX=Math.abs(bx-dx);
	offsetY=Math.abs(by-dy);
	
	if(offsetX<93&&offsetY<52)
	{
		gameOver.style.visibility='visible';
		dinasour.classList.remove('dinasourAni');
		
	}
	else if(offsetX<145 &&cross){
		score=score+1;
		updateScore(score);
		cross=false;
		setTimeout(()=>{
			cross=true;
		},1000);
	}
},10)

function updateScore(score){
	ScoreVal.innerHTML="Your score :"+score
}
