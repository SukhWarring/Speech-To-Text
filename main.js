const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input"); // <=> document.querySelector("#search-form input");
const info = document.querySelector(".info");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    console.log("your browser support Speech Recognition");

    searchForm.insertAdjacentHTML("beforeend",'<button type="button"><i class="fas fa-microphone"></i>')
    const micBtn = searchForm.querySelector("button");
    const micIcon = micBtn.querySelector("i");

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang ="de";

    micBtn.addEventListener("click", micBtnClick);
    function micBtnClick(){
        if (micIcon.classList.contains("fa-microphone")) 
        {//start speech recognition
        recognition.start(); 
        } 
        else
         {//stop speech recognition
        recognition.stop();
        }
    } 
    recognition.addEventListener("start",startSpeechRecognition);
    function startSpeechRecognition(){
        micIcon.classList.remove("fa-microphone");
        micIcon.classList.add("fa-microphone-slash");
        searchFormInput.focus();
        console.log("Speech Recognition Active");
    }
    recognition.addEventListener("end",endSpeechRecognition);
    function endSpeechRecognition(){
        micIcon.classList.remove("fa-microphone-slash");
        micIcon.classList.add("fa-microphone");
        searchFormInput.focus();
        console.log("Speech Recognition disconnect");
} 
 recognition.addEventListener("result",resultOfSpeechRecognition);
 function resultOfSpeechRecognition(event){
     const currentResultIndex = event.resultIndex;
     const transcript = event.results[currentResultIndex][0].transcript;
         
    if(transcript.toLowerCase().trim()==="stop recording") {
        recognition.stop();
      }
      else if(!searchFormInput.value)
       {
        searchFormInput.value = transcript;
      }
      else {
        if(transcript.toLowerCase().trim()==="go") {
          searchForm.submit();
        }
        else if(transcript.toLowerCase().trim()==="reset input") {
          searchFormInput.value = "";
        }
        else {
          searchFormInput.value = transcript;
        }
      }
   } 

        info.textContent = 'Voice Commands: "stop recording", "reset input", "go"';

}
else 
{
 console.log("your browser does not support Speech Recognition") ;  
}
