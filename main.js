Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
})
camera=document.getElementById("camera");
Webcam.attach('#camera');
function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image" src="'+data_uri+'"/>';
    })
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('MobileNet',model_loaded);
function model_loaded(){
    console.log("Model Loaded");
}
function check_image(){
    img=document.getElementById("image");
    classifier.classify(img,result);
}
function result(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("name").innerHTML=result[0].label;
    }
}