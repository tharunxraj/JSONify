// run everything after the page loads
window.onload = function() {

  // get all buttons and boxes from the page
  var formatBtn = document.getElementById("formatBtn");
  var minifyBtn = document.getElementById("minifyBtn");
  var clearBtn = document.getElementById("clearBtn");
  var copyBtn = document.getElementById("copyBtn");
  var themeBtn = document.getElementById("themeBtn");
  var inputBox = document.getElementById("inputBox");
  var outputBox = document.getElementById("outputBox");
  var errorMsg = document.getElementById("errorMsg");

  // when format button is clicked
  formatBtn.onclick = function() {

    // clear old messages
    errorMsg.textContent = "";
    outputBox.textContent = "";

    // get the text from input box
    var userInput = inputBox.value;

    // check if input is empty
    if (userInput == "") {
      errorMsg.textContent = "Please paste some JSON first!";
      return;
    }

    // format the json
    try {
      var parsedJSON = JSON.parse(userInput);
      var formattedJSON = JSON.stringify(parsedJSON, null, 2);
      outputBox.textContent = formattedJSON;
    } catch (error) {
      errorMsg.textContent = "Invalid JSON! Please check your input.";
    }

  }

  // when minify button is clicked
  minifyBtn.onclick = function() {

    // clear old messages
    errorMsg.textContent = "";
    outputBox.textContent = "";

    // get the text from input box
    var userInput = inputBox.value;

    // check if input is empty
    if (userInput == "") {
      errorMsg.textContent = "Please paste some JSON first!";
      return;
    }

    // minify the json
    try {
      var parsedJSON = JSON.parse(userInput);
      var minifiedJSON = JSON.stringify(parsedJSON);
      outputBox.textContent = minifiedJSON;
    } catch (error) {
      errorMsg.textContent = "Invalid JSON! Please check your input.";
    }

  }

  // when clear button is clicked
  clearBtn.onclick = function() {
    inputBox.value = "";
    outputBox.textContent = "";
    errorMsg.textContent = "";
  }

  // when copy button is clicked
  copyBtn.onclick = function() {

    // check if there is anything to copy
    if (outputBox.textContent == "" ||
        outputBox.textContent == "Your formatted JSON will appear here...") {
      errorMsg.textContent = "Nothing to copy yet!";
      return;
    }

    // copy text to clipboard
    navigator.clipboard.writeText(outputBox.textContent);

    // change button text to show it was copied
    copyBtn.textContent = "Copied!";

    // change button text back after 2 seconds
    setTimeout(function() {
      copyBtn.textContent = "Copy";
    }, 2000);

  }

  // when dark mode button is clicked
  themeBtn.onclick = function() {

    // add or remove dark class from body
    document.body.classList.toggle("dark");

    // change button text based on current mode
    if (document.body.classList.contains("dark")) {
      themeBtn.textContent = "Light Mode";
    } else {
      themeBtn.textContent = "Dark Mode";
    }

  }

}