nose_X = 0;
nose_Y = 0;
Wrist_Left_X = 0;
Wrist_Right_Y = 0;
Difference = 0;

function preload(){
}

function setup(){
    video = createCapture(VIDEO);
    video.size(560, 500);
    canvas = createCanvas(560, 450);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#284646");
    fill("#f5a00f");
    stroke("#f53d0f");
    square(nose_X, nose_Y, Difference);
    document.getElementById("square").innerHTML = "Side length of the Square will be: " + Difference + "px!";
}

function modelLoaded(){
    console.log("Posenet is successfully Initialized.")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;
        console.log("Nose X = " + nose_X + "and Nose Y = " + nose_Y);
        Wrist_Left_X = results[0].pose.leftWrist.x;
        Wrist_Right_X = results[0].pose.rightWrist.x;
        Difference = Wrist_Left_X - Wrist_Right_X;
        console.log(Difference);
    }
}