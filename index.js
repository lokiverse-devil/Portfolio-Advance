let message = "Being a coder is never easy ................. Life gives you multiple ups and downs but you are a damn CODER!!";
let i = 0;
let interval;
let hasShownMessage = false; // NEW FLAG

function showMessage() {
  const messageBox = document.getElementById("messageBox");
  messageBox.textContent = "";
  i = 0;

  clearInterval(interval);
  interval = setInterval(() => {
    if (i < message.length) {
      messageBox.textContent += message.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      hasShownMessage = true; 
    }
  }, 50);
}

$(document).ready(function () {
$("#welcomeBox").hover(function () {
  if (!hasShownMessage) {
    $("#messageBox").fadeIn();
    showMessage();
  } else {
    $("#messageBox").fadeIn(); 
  }
});
});