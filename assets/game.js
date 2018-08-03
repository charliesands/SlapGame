let gameStats = {
  health: 100,
  targetName: "Mike Tyson",
  hits: 0,
  items: []
}

let items = {
  removePadding: { name: "Padding Removal", modifier: 2, description: "Remove padding from gloves" },
  peds: { name: "PED's", modifier: 5, description: "Performance Enhancing Drugs" },
  cheatCode: { name: "Cheat Code!", modifier: 10, description: "Cheaters always win" }
}

function headShot() {
  gameStats.health = gameStats.health -= 1 + addMods();
  gameStats.hits++
  update()
}

function bodyShot() {
  gameStats.health = gameStats.health - 5;
  gameStats.hits++
  update()
}

function upperCut() {
  gameStats.health = gameStats.health - 10;
  gameStats.hits++
  update()
}

function givePeds() {
  gameStats.items.push(items.peds)
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

