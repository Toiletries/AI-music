song=""
song1=""
leftwristx=0
leftwristy=0
righwristx=0
righwristy=0
scoreleftwrist=0
scorerightwrist=0
function preload(){
song=loadSound("music.mp3")
song1=loadSound("beatdrop.mp3")
}
function setup(){
canvas=createCanvas(600,500)
canvas.center()
video=createCapture(VIDEO)
video.hide()
poseNet=ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotposes);
}
function modelLoaded(){
    console.log("poseNet is initialised")
}
function gotposes(results){
    if (results.length>0) {
        console.log(results)
        leftwristx=results[0].pose.leftWrist.x
        leftwristy=results[0].pose.leftWrist.y
        rightwristx=results[0].pose.rightWrist.x
        rightwristy=results[0].pose.rightWrist.y
        scoreleftwrist=results[0].pose.leftWrist.confidence
        scorerightwrist=results[0].pose.rightWrist.confidence
    }
}
function draw(){
    image(video,0,0,600,500)
    fill("red")
    if (scoreleftwrist>0.05) {
        circle(leftwristx,leftwristy,30)
    }
    if (scorerightwrist>0.05) {
        circle(rightwristx,rightwristy,30)
    }
    }
