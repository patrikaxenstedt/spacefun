let objImage = null;

window.onload = init;

// Spaceship
function init() {
  objImage = document.getElementById("image1");
  objImage.style.position = "relative";
  objImage.style.left = "525px";
  objImage.style.top = "500px";
}

// För att styra Spaceship

function getKeyAndMove(e) {
  let key_code = e.which || e.keyCode;
  switch (key_code) {
    case 37: //left
      moveLeft();
      break;
    case 38: //up
      moveUp();
      break;
    case 39: //right
      moveRight();
      break;
    case 40: //down
      moveDown();
      break;
  }
}
function moveLeft() {
  objImage.style.left = parseInt(objImage.style.left) - 25 + "px";
}
function moveUp() {
  objImage.style.top = parseInt(objImage.style.top) - 25 + "px";
}
function moveRight() {
  objImage.style.left = parseInt(objImage.style.left) + 25 + "px";
}
function moveDown() {
  objImage.style.top = parseInt(objImage.style.top) + 25 + "px";
}
// Spacebar för att skjuta (bara ljud())
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 32) {
    document.getElementById("audio").play();
  }
});
