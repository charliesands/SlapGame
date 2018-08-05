let gameStats = {
  health: 1000,
  targetName: "Mike Tyson",
  hits: 0,
  items: []
}

let items = {
  removePadding: { name: "Padding Removal", modifier: 10, description: "Remove padding from gloves" },
  peds: { name: "PED's", modifier: 25, description: "Performance Enhancing Drugs" },
  cheatCode: { name: "Cheat Code!", modifier: 250, description: "Cheaters always win" }
}

function reset() {
  gameStats.health = 1000
  gameStats.hits = 0
  gameStats.items = []
  clickedPeds = 0
  clicked = 0
  clickPad = 0;
}

function headShot() {
  gameStats.health = gameStats.health -= 10 + addMods();
  gameStats.hits++
  if (gameStats.health < 0) {
    gameStats.health = 0;
  }
  update()
}

function bodyShot() {
  gameStats.health = gameStats.health -= 15 + addMods();
  gameStats.hits++
  if (gameStats.health < 0) {
    gameStats.health = 0;
  }
  update()
}

function upperCut() {
  gameStats.health = gameStats.health -= 30 + addMods();
  gameStats.hits++
  if (gameStats.health < 0) {
    gameStats.health = 0;
  }
  update()
}

let clickedPeds = 0
function givePeds() {
  if (clickedPeds++ < 5) {
    gameStats.items.push(items.peds);
  }
  else {
    alert("Dude! You're dead!")
    reset()
    update()
  }
  update()
}

let clickPad = 0;
function giveRemovePadding() {
  if (clickPad++ < 20) {
    gameStats.items.push(items.removePadding)
  }
  else {
    alert("Good job! Your hand is broken.")
    reset()
    update()
  }
  update()
}

let clicked = 0
function giveCheatCode() {

  if (clicked++ < 3) {
    gameStats.items.push(items.cheatCode);
  }
  else {
    alert("Really? C'mon man. You lose!")
    reset()
    update()
  }
  update()
}

function addMods() {
  let modTotal = 0
  for (let i = 0; i < gameStats.items.length; i++) {
    let mod = gameStats.items[i].modifier;
    modTotal += mod
  }
  return modTotal;
}

function update() {
  document.getElementById("hits").innerText = gameStats.hits.toString();
  document.getElementById("health").innerText = gameStats.health.toString();
  document.getElementById("target-name").innerText = gameStats.targetName;
}

update();

