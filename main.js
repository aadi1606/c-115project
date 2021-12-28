mustacheX=0;
mustacheY=0;

function preload(){
mustache_img=loadImage('https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.clker.com%2Fclipart-mustache-looty.html&psig=AOvVaw00D4yz8ah2WhYlY3QoN9AG&ust=1640789643926000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mfHfhvUCFQAAAAAdAAAAABAD')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
 image(video,0,0,300,300);
 image(mustache_img,mustacheX,mustacheY,30,30);
}

function take_snapshot(){
    save("MyFilterImage.png");
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        mustacheX=results[0].pose.mustache.x-15;
        mustacheY=results[0].pose.mustache.y-15;
    }
}