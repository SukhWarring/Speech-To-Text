
try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.log("your browser does not support Speech Recognition") ; 
  $('.app').hide();
}
var noteTextarea = $('#textarea');
var instructions = $('#instructions');
var noteContent = '';

recognition.continuous = true;

recognition.onresult = function(event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }
};
recognition.onstart = function() { 
  instructions.text('Voice recognition activated.');
}
recognition.onspeechend = function() {
  instructions.text('You were quiet for a while so voice recognition turned itself off.');
}
recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('No speech was detected. Try again.');  
  };
}
$('#start-btn').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
});

$('#stop-btn').on('click', function(e) {
  recognition.stop();
  instructions.text('Voice recognition stop.');
});

$('#save-btn').on('click', function(e) {
  recognition.stop();
  noteTextarea.val(noteContent);
  instructions.text('Voice recognition save .');
  
});
$('#clear-btn').on('click', function(e){
  recognition.stop();
  noteContent = '';
  noteTextarea.val('');
})