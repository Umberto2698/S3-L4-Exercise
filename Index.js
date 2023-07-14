const tabellone = document.getElementById("tabellone");
const buttonContainer = document.getElementById("forbutton");
const estratti = document.getElementById("estratti");
const numeroCartelle = document.getElementById("inputCartelle");
const buttonCartelle = document.getElementById("buttonCartelle");

let cartelleNmb = [];
const scegliCartelle = (event) => {
  event.preventDefault();
  for (let i = 0; i < numeroCartelle.value; i++) {
    const cartella = document.createElement("div");
    for (let j = 0; j < 24; j++) {
      const casella = document.createElement("div");
      const nmbLocation = document.createElement("p");
      let randomNmb = Math.floor(Math.random() * 76 + 1);
      if (cartelleNmb.some((n) => n === randomNmb)) {
        j--;
        continue;
      } else {
        cartelleNmb.push(randomNmb);
        nmbLocation.innerText = `${randomNmb}`;
        casella.classList.add("casella");
        nmbLocation.classList.add("cella");
        casella.appendChild(nmbLocation);
        cartella.appendChild(casella);
        estratti.appendChild(cartella);
      }
    }
    cartelleNmb = [];
  }
};

let exstractedNmb = [];
const exstraction = () => {
  estratti.innerHTML = "";
  let randomNmb = Math.floor(Math.random() * 76 + 1);
  for (let i = 0; i < exstractedNmb.length; i++) {
    if (exstractedNmb[i] === randomNmb) {
      exstraction();
      return;
    }
  }
  exstractedNmb.push(randomNmb);
  let selectedCasella = tabellone.childNodes[parseInt(randomNmb) - 1];
  selectedCasella.innerHTML = `<i class="fas fa-times cellAfterClick"><span>${randomNmb}</span></i>`;
  const p = document.createElement("p");
  p.innerHTML = "&Egrave; stato estratto il numero " + randomNmb;
  estratti.appendChild(p);
};

for (let i = 0; i < 76; i++) {
  const casella = document.createElement("div");
  casella.classList.add("casella");
  const nmbLocation = document.createElement("p");
  nmbLocation.classList.add("cella");
  nmbLocation.innerText = `${i + 1}`;
  casella.appendChild(nmbLocation);
  tabellone.appendChild(casella);
}
const exstractionButn = document.createElement("button");
exstractionButn.innerHTML = `<i class="fas fa-dice simbol" ></i>`;
exstractionButn.classList.add("button");
exstractionButn.onclick = exstraction;
buttonContainer.appendChild(exstractionButn);
