mario="";
harryPotter="";

function preload(){
mario= loadSound("smb3-overworld.mp3");
harryPotter= loadSound("music.mp3");
}


function setup(){
canvas=createCanvas(530,400);
canvas.position(500,250);
video=createCapture(VIDEO);
video.hide();
mario.play();
}


function draw(){
image(video,0,0,530,400);
}
