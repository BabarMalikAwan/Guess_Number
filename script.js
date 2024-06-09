"use strict";
/*console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20)+1;
//document.querySelector('.number').textContent = secretNumber;
let score=20;
document.querySelector('.btn-check').addEventListener('click',function(){
	const guess=Number(document.querySelector('.guess').value);
          document.querySelector('.score').textContent=score;

    if(!guess){
    	document.querySelector('.message').textContent='No number';

    }
    else if(guess===secretNumber){
         	document.querySelector('.message').textContent='HURRAH! Correct Number';
         	document.querySelector('body').style.backgroundColor='green';
         	document.querySelector('.number').textContent = secretNumber;


    }
    else if(guess > secretNumber){

    	if(score > 1){

    	document.querySelector('.message').textContent='Too High!';
    	score--;
    	document.querySelector('.score').textContent=score;
    }else if(guess < secretNumber){
    	document.querySelector('.message').textContent='Too Low!';
        score--;
    	document.querySelector('.score').textContent=score;

       }else{
    	    	document.querySelector('.message').textContent='Sorry! You lost the game';

              }
    
    }

});
document.querySelector('.btn-again').addEventListener('click',function(){
score=20;
secretNumber = Math.trunc(Math.random() * 20)+1;

    	document.querySelector('.message').textContent='start guessing...';
    	    	document.querySelector('.score').textContent=score;
    	document.querySelector('.number').textContent='?';
    	    	document.querySelector('.guess').value='';
    	    	         	document.querySelector('body').style.backgroundColor='gray';





});
