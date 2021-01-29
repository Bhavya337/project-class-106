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
    
    var speak_this=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(speak_this); }

       
  function result()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;

    predict_1=results[0].label;
  
    console.log(predict_1);
    speak();
   if (results[0].label=="best"){
     document.getElementById("result_emoji").innerHTML="&#128077;";


   }


   if (results[0].label=="victory"){
    document.getElementById("result_emoji").innerHTML="&#9996;";


  }

  
  if (results[0].label=="amazing"){
    document.getElementById("result_emoji").innerHTML="&#128076;";


  }



  }}
      
  