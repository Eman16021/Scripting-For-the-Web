# Scripting-For-the-Web  

This ReadME will provide a general overview of what I've completed over the semester. This semester I created a Pong Game and Learned about Fragment Shaders straight from the web. 
PONG
  First off all. I created a retro Pong Game. I did this with mostly JavaScript and some Css. I applied much of what I learned in class and in our text book. I used variables to control all of the objects. The paddles, the ball, its speed, and the game window. I also used basic methods to call elements in the HTML so I could manipulate them. 
Moreover, I have multiple functions running throughout. For example I have a counter function controlling the point system between the Player and the AI. 
  I also have functions responsible for the sound effects. I have bounces noises, crowd noises, and a theme song.  For example I have a function where on the event that the ball hits a paddle a bounce sound is called. In order to project sound I'm using Howler.js which allows me to control sound straight through Javascript. Letting me control looping, play, pause, skip, volume etc...
  Lastly to add a little extra, I have animations also running on the page when it first opens up.
  
Fragment Shaders 
 Towards the end of the semester I became interested in Fragment Shaders and effects. More specifically how to make them myself. Or atleast lean how to read them. 
I started my research downloading and using the ISF editor. This software is actually pretty great. The editor lets me directly code Fragment Shaders. With it I can also download .FS files straight from the web. All I have to do is copy a link, paste it in ISF editor and vuala. I now have an FX I can apply to VDMX and MadMapper. 

This wasn't enough for me though. I wanted to learn how to actually give th FX/.FS parameters that I could then control/manipulate through VDMX or MadMapper. And so I did. By using JSon code I learned more or less how to apply parameters to the FX. Weather it be a slider, a boolean, or bang or a color picker. I do this by writing Inputs in the JSON section of the ISF editor. With this I made my first fragment shader that allowed me to control an input image scale, and X coordinate. I then loaded the .FS into Vdmx, made it audio reactive and then syphoned it into MadMapper. Where I then projected it. 
