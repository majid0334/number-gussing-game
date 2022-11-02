const guessUnder = document.getElementById("guess-number");
const typeNumber = document.getElementById("type-number");
const button = document.getElementById("bth");
const btns = document.getElementsByClassName("bths");
const previosValues = document.getElementById("previos-values");
const disp = document.getElementById("display");

//skapa variabel som generar nummer mellan 1-100
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

// Gissa mellan dom här talen
if (randomNumber <= 25) {
  guessUnder.innerText = "Guees under 25";
} else if (randomNumber <= 50) {
  guessUnder.innerText = "Guees under 50";
} else if (randomNumber <= 75) {
  guessUnder.innerText = "Guees under 75";
} else {
  guessUnder.innerText = "Guees under 100";
}

//hur nära den man är aktuella siffran
button.addEventListener("click", function () {
  if (randomNumber > typeNumber.value) {
    //skapar html dokument med Javascript
    const fragment = document.createDocumentFragment();
    const li = fragment
      // Blir barn till body
      .appendChild(document.createElement("section"))
      //blir Barn till section
      .appendChild(document.createElement("ul"))
      //blir barn till ul
      .appendChild(document.createElement("li"));
    //srkiver ut var if sats
    li.textContent = `guees higher you are close: your number  ${typeNumber.value}`;

    //lägga in i if sats
    //Knappen slutar funka efter man tryck på den fem gånger

    for (let i = 0; i < btns.length; i++) {
      btns[i].onclick = function () {
        this.setAttribute(
          "data-clicks",
          Number(this.getAttribute("data-clicks")) + 1
        );

        if (this.getAttribute("data-clicks") === "5") {
          this.setAttribute("disabled", "disabled");
        }
      };
    }

    document.body.appendChild(fragment);
  } else if (randomNumber == typeNumber.value) {
    console.log("correct");
    alert("You win");
    //laddar om var sida och generar ny nummer
    location.reload();
  } else {
    //skapar html dokument
    const fragment = document.createDocumentFragment();
    const li = fragment
      //barn till body
      .appendChild(document.createElement("section"))
      //barn till section
      .appendChild(document.createElement("ul"))
      //barn till ul
      .appendChild(document.createElement("li"));
    //srkiver ut var if sats
    li.textContent = `guees lower you are close: your number  ${typeNumber.value}`;

    document.body.appendChild(fragment);

    //Lägga in var else sats
    //Knappen slutar funka efter man tryck på den fem gånger
    for (let i = 0; i < btns.length; i++) {
      btns[i].onclick = function () {
        this.setAttribute(
          "data-clicks",
          Number(this.getAttribute("data-clicks")) + 1
        );

        if (this.getAttribute("data-clicks") === "5") {
          this.setAttribute("disabled", "disabled");
        }
      };
    }
  }
});
