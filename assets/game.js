let health = 100;

function headShot() {
  health = health - 1;
  update()
}

function bodyShot() {
  health = health - 5;
  update()
}

function upperCut() {
  health = health - 10;
  update()
}

function update() {
  return document.getElementById("health").innerText = health.toString();
}

update();
headShot();
