function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDectector=ml5.objectDectector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status is detecting objects"
}
img="";
function preload(){
img=loadImage('dog_cat.jpg');


}
function draw(){
image(img,0,0,640,420);
fill("#ba6844");
text("Dog",45,75);
noFill();
stroke("#0b74ae");
rect(30,60,450,350);
fill("#1683b6");
text("cat",320,120);
noFill();
stroke("#d39d75");
rect(300,90,270,320);
}

function modelLoaded(){
console.log("modelLoaded");
status=true;
objectDectector.detect(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error)
}
else{
    console.log(results);
}

}


