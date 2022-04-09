var video = "";
var status = "";
var objects = [];

function preload() {
  video =   createVideo('video.mp4');
  video.hide();
}

function setup() {
   canvas =  createCanvas(380,380);
   canvas.center();

}

function draw() {
    image(video,0,0,480,480);
    if(status != ""){
      objectDetector.detect(video,gotResult);
    for(i = 0; i<objects.length; i++) {
      document.getElementById("status").innerHTML = "Status: Detecting objects";
      document.getElementById("number_of_objects").innerHTML = "Number of objects detected are" + objects.length;

      fill("#FF0000");
      var percent = floor(objects[i].confidence * 100);
      text(object[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      nofill();
      stroke('#FF0000');
      rect(object[i].x, objects[i].y, objects[i].width, objects[i].height);
       }
      }
}

function start() {
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Object";

}

function modelLoaded() {
    console.log("model is Loaded, hence ModelLoaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error,results) {
  if(error) {
    console.error(error);
  }
  console.log(results);
  objects = results;
}

