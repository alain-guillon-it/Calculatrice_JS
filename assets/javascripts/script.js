let showResultCalcul = document.getElementById("calculatriceShowResult");
let showCalcul = document.getElementById("calculatriceShowCalcul");

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    let saisie = event.target.textContent;
    console.log(event)

    if (saisie == "AC") {
      showCalcul.innerText = "";
      showResultCalcul.innerText = "0";
    }
    if (saisie != "AC") {
      showCalcul.innerText += `${saisie} `;
    }

    if (saisie == "=") {
      const calcul = showCalcul.innerText.split("=");
      console.log(eval(calcul[0]));
      showResultCalcul.innerText = eval(calcul[0]);
      showCalcul.innerText = "";
    }
    // console.log(showResultCalcul.innerHTML);
    // console.log(showCalcul, buttons[i].value)
  });
}
