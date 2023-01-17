function preload() {

}

function setup() {
    video = createCapture(VIDEO)
    video.position(165 , 150)
    video.size(300 , 300 )
    pn = ml5.poseNet(video , modelLoaded)
    pn.on("pose" , gotResults )
canvas = createCanvas(300 , 300) ; 
canvas.center()
}



function modelLoaded() {
   console.log("model has loaded commander") 
}

function gotResults(results){

if(results.length>0){
console.log(results)
}

}