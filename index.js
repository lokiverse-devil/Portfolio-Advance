let i = 0;
let interval;
let hasShownp = false;

function revealMessage() {
  if (hasShownp) return;

  $("#welcomeBox").fadeOut(200, function () {
    $("#messageBox").fadeIn(600, function () {
      typeMessage();
    });
  });
}

function typeMessage() {
  const fullMessage = document.getElementById("msg").textContent;
  const typedText = document.getElementById("typedText");
  typedText.textContent = ""; // Clear previous if any
  i = 0;

  clearInterval(interval);
  interval = setInterval(() => {
    if (i < fullMessage.length) {
      typedText.textContent += fullMessage.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      hasShownp = true;
      $(".btn2").fadeIn(200); // Show button smoothly
    }
  }, 50);
}

