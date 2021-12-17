mario="";
harryPotter="";

lWX="";
lWY="";
rWX="";
rWY="";

songPlaying="";

lWScore="";
rWScore="";
marioIsPlaying="";
hPIsPlaying="";

function preload(){
mario= loadSound("smb3-overworld.mp3");
hP= loadSound("music.mp3");
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

marioIsPlaying= mario.isPlaying();
hPIsPlaying= hP.isPlaying();

if(lWScore > 0.5){
    fill("#FF0000");
    stroke("#FF0000");
    circle(lWX,lWY,20);
    hP.stop();
    mario.play();
    songPlaying="Mario";
}

if(rWScore > 0.5){
    fill("#FF0000");
    stroke("#FF0000");
    circle(rWX,rWY,20);
    mario.stop();
    hP.play();
    songPlaying="Harry Potter";
}

document.getElementById("songName").innerHTML="Song Playing: " + songPlaying;

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

        lWScore= results[0].pose.keypoints[9].score;
        rWScore= results[0].pose.keypoints[10].score;

        console.log("LWX = " + lWX, "LWY = " + lWY);
        console.log("RWX = " + rWX, "RWY = " + rWY);
    }
}