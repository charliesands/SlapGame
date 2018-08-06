let gameStats = {
  health: 1000,
  targetName: "Mike Tyson",
  hits: 0,
  items: []
}

let items = {
  removePadding: { name: "Bite Ear", modifier: 10, description: "Bite ear" },
  peds: { name: "PED's", modifier: 25, description: "Performance Enhancing Drugs" },
  cheatCode: { name: "Cheat Code!", modifier: 100, description: "Cheaters always win" }
}

function reset() {
  gameStats.health = 1000
  gameStats.hits = 0
  gameStats.items = []
  clickedPeds = 0
  clicked = 0
  clickPad = 0
  update()
}

function headShot() {
  gameStats.health = gameStats.health -= 10 + addMods();
  if (gameStats.health < 0) {
    gameStats.health = 0
  }
  checkHealth()
}

function bodyShot() {
  gameStats.health = gameStats.health -= 15 + addMods();
  if (gameStats.health < 0) {
    gameStats.health = 0;
  }
  checkHealth()
}

function upperCut() {
  gameStats.health = gameStats.health -= 30 + addMods();
  if (gameStats.health < 0) {
    gameStats.health = 0;
  }
  checkHealth()
}

let clickedPeds = 0
function givePeds() {
  if (clickedPeds++ < 5) {
    gameStats.items.push(items.peds);
  }
  else {
    $('#pedModal').modal('toggle')
    reset()
    update()
  }
  update()
}

let clickPad = 0;
function giveRemovePadding() {
  if (clickPad++ < 1) {
    gameStats.items.push(items.removePadding)
  }
  else {
    $('#biteModal').modal('toggle')
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
    $('#cheatModal').modal('toggle')
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
  document.getElementById("hits").innerText = gameStats.hits.toString()
  document.getElementById("health").innerText = gameStats.health.toString()
  document.getElementById("target-name").innerText = gameStats.targetName
}

function checkHealth() {
  update()
  if (gameStats.health == 0) {
    $('#winModal').modal('toggle')
    return
  }
  gameStats.hits++
}

update()

