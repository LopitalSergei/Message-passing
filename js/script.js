"use strict";let message=document.getElementById("message-input");function getMessage(){console.log(message.value),document.getElementById("message-output").innerHTML=message.value,message.value=""}message.addEventListener("keydown",(function(e){"Enter"==e.key&&getMessage()}));