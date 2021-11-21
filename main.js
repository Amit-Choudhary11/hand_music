mario="";
harryPotter="";

lWX="";
lWY="";
rWX="";
rWY="";

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

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotResults);
}


function draw(){
image(video,0,0,530,400);
}

function modelLoaded(){
    console.log("model loaded");
}


function gotResults(results){
    if(results.length > 0){
        lWX= results[0].pose.leftWrist.x;
        lWY= results[0].pose.leftWrist.y;

        rWX= results[0].pose.rightWrist.x;
        rWY= results[0].pose.rightWrist.y;

        console.log("LWX = " + lWX, "LWY = " + lWY);
        console.log("RWX = " + rWX, "RWY = " + rWY);
    }
}