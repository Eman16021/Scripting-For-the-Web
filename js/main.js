/*
 _____   _           _         _                        _
|_   _| | |         | |       | |                      | |
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);

});



var Speed = 6; // Speed of ball (pixels/step)
var CPUSpeed = 8; // Speed of CPU Paddle (pixels/step)
// Short references to objects
var paddle1;
var paddle2;
var ball;
var box;
var msg;
// For internal use
var dx, dy // speed in x and y directions
var ballX, ballY // x and y postions of the ball
var playerY // y postion of player paddle (x is fixed)
var cpuY // y postion of cpu paddle (x is fixed)
var iID; // To store ID of set interval used to clear it when required

// Attach a function to onLoad event
window.onload = Init;
// Initialize Game Objects
function Init()
{
  // Make short refrences to objects

     paddle1 = document.getElementById('paddle1');
     paddle2 = document.getElementById('paddle2');
     ball = document.getElementById('soccerball');
     box = document.getElementById('box');
     msg = document.getElementById('msg');
     // Initial values
       ballX = (box.offsetWidth / 2) - (ball.offsetWidth / 2);
       ballY = (box.offsetHeight / 2) - (ball.offsetHeight / 2);
       cpuY = (box.offsetHeight / 2) - (paddle2.offsetHeight / 2);
       playerY = (box.offsetHeight / 2) - (paddle1.offsetHeight / 2);
       dx = dy = Speed


   paddle1.style.left = 20 + 'px';
   paddle1.style.top = playerY + 'px';
   paddle2.style.left = box.offsetWidth - (20 + paddle2.offsetWidth) + 'px';
   paddle2.style.top = cpuY + 'px';
   ball.style.left = ballX + 'px';
   ball.style.top = ballY + 'px';

   // Show message

   msg.innerHTML = '<h2 class="font">Click on Paddle to Start Game.</h2>';


}


// START GAME
function Start()
{
   // Attach a function to onmousemove event of the box
   box.onmousemove = MovePaddle;
   // Call 'GameLoop()' function every 10 milliseconds

   iID = setInterval('GameLoop()', 10);

   msg.innerHTML = '';
}
// MAIN GAME LOOP, CALLED REPEATEDLY
function GameLoop()
{
   // MOVE BALL
   ballX += dx;
   ballY += dy;

   // See if ball is past player paddle

   if(ballX < 0)
   {
      clearInterval(iID);
      Init();

      box.onmousemove = '';

      msg.innerHTML = '<h2 class="font">You Loose!<br/>Click on Paddle to Re-Start Game.</h2>';
   }

   // See if ball is past CPU paddle

   if((ballX + ball.offsetWidth) > box.offsetWidth)
   {
      clearInterval(iID);
      Init();

      box.onmousemove = '';

      msg.innerHTML = '<h2>You Win!<br/>Click on Paddle to Re-Start Game.</h2>';
   }



   // COLLISION DETECTION

   // If ball hits upper or lower wall
   if(ballY < 0 || ((ballY + ball.offsetHeight) > box.offsetHeight))
      dy = -dy; // Make x direction opposite

   // If ball hits player paddle

   if(ballX < (paddle1.offsetLeft + paddle1.offsetWidth))
      if(((ballY + ball.offsetHeight) > playerY) && ballY < (playerY + paddle1.offsetHeight))
         dx = -dx;
    // if ball hits player paddle bouce sound effect
            if(ballX < (paddle1.offsetLeft + paddle1.offsetWidth))
               if(((ballY + ball.offsetHeight) > playerY) && ballY < (playerY + paddle1.offsetHeight))
                   play()

   // If ball hits CPU paddle
   if((ballX + ball.offsetWidth) > paddle2.offsetLeft)
      if(((ballY + ball.offsetHeight) > cpuY) && ballY < (cpuY + paddle2.offsetHeight))
         dx = -dx;

         // if ball hits CPU sound effect
         if((ballX + ball.offsetWidth) > paddle2.offsetLeft)
            if(((ballY + ball.offsetHeight) > cpuY) && ballY < (cpuY + paddle2.offsetHeight))
               play()
   // Place ball at calculated positions

   ball.style.left = ballX + 'px';
   ball.style.top = ballY + 'px';

   // MOVE CPU PADDLE
   // Move paddle only if ball is coming towards the CPU paddle
   if(dx > 0)
   {
      if((cpuY + (paddle2.offsetHeight / 2)) > (ballY + ball.offsetHeight)) cpuY -= CPUSpeed;
      else cpuY += CPUSpeed;

      paddle2.style.top = cpuY + 'px';
   }
}
// TO MOVE PLAYER PADDLE ON MOUSE MOVE EVENT
function MovePaddle(e)
{
   // Fetch y coordinate of mouse
   var y = (e.clientY - (box.offsetTop - document.documentElement.scrollTop));
   // Here, (box.offsetTop - document.documentElement.scrollTop) will get the relative
   // position of "box" w.r.t to current scroll postion

   // If y below lower boundary (cannot go above upper boundary -
   // mousemove event only generated when mouse is inside box
   if(y > (box.offsetHeight - paddle1.offsetHeight))
      y = (box.offsetHeight - paddle1.offsetHeight);

   // Copy position
   playerY = y;
   // Set position

   paddle1.style.top = y + 'px';
}



function play() {


var sound = new Howl({   // Ball bounce sound effect
  src: ['js/mp3/sound.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.3,
  onend: function() {
    console.log('Finished!');
  }
});
}


var sound = new Howl({    // Theme Song
  src: ['js/mp3/sab.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log('Finished!');
  }
});
$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);

});
