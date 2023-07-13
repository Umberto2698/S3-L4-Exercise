const tabellone = document.getElementById("tabellone");
const buttonContainer = document.getElementById("forbutton");
const estratti = document.getElementById("estratti");
let exstractedNmb = [];

const exstraction = () => {
  let randomNmb = Math.floor(Math.random() * 76 + 1);
  for (i = 0; i < exstractedNmb.length; i++) {
    if (exstractedNmb[i] === randomNmb) {
      exstraction();
      return;
    }
  }
  exstractedNmb.push(randomNmb);
  let selectedCasella = tabellone.childNodes[parseInt(randomNmb) - 1];
  selectedCasella.innerHTML = `<i class="fas fa-times cellAfterClick"><span>${randomNmb}</span></i>`;
  const li = document.createElement("li");
  li.innerText = `è stato estratto il numero ${randomNmb}`;
  estratti.appendChild(li);
};

for (i = 0; i < 76; i++) {
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
