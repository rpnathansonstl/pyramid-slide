

var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");

formElem.onsubmit = function(event) {
    event.preventDefault();

    clearError();

    heightStr = heightElem.value;

      if (heightStr === '') {
        displayError("Please provide a height.");
        return;
      }

      height = parseInt(heightStr, 10);

    if (isNaN(height) || height <= 0) {
        displayError("That's not a valid height.");
        return;
      }

    var tooTall = 100;
    if (height > tooTall) {
        displayError("Are you cray? I can't build a pyramid that tall.");
        return;
    }

    drawPyramid(height);
}

function displayError(message) {
    heightElem.className = "invalid-field";
    document.querySelector(".error-message").innerHTML = message;
}

function clearError() {

    heightElem.className = '';
    document.querySelector(".error-message").innerHTML = '';
}

function drawPyramid(height) {

    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);

    }
}

  function outputUpdate(hgt) {
     document.querySelector('#number').value = hgt;
}
