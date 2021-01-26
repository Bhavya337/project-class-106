//https://teachablemachine.withgoogle.com/models/2MtGo4hMy/

predict_1="";

 
Webcam.set({
    width:310,
    height:300,
    
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function Takesnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2MtGo4hMy/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }

  function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is "+ predict_1 ;
    
    var speak_this=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(speak_this); }
      
  