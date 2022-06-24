// --- Esercizi

// Creare un piccolo counter
// Partiamo dal solo body in HTML
// - Generiamo da JS due bottoni ed un DIV
// - Inseriamo gli elementi a schermo
// - Ne div avremo sempre a schermo lo stato del nostro counter ("1" oppure "2" oppure "3", ...)
// - Aggiungere al primo bottone la funzionalità di incremento
// - Aggiungere al secondo bottone la funzionalità di decremento

// Bonus:
// mettiamo un limite di decremento a 0
// mettiamo un limite di incremento a 10

// Super bonus:
// Rimuovere il codice duplicato

(function () {
  let counter = 0;

  const $box = document.createElement("div");
  $box.innerHTML = `${counter}`;

  const $buttonIncrease = document.createElement("button");
  $buttonIncrease.innerHTML = "+";

  const $buttonDecrease = document.createElement("button");
  $buttonDecrease.innerHTML = "-";

  document.body.append($buttonDecrease, $box, $buttonIncrease);

  document.body.style.display = "flex";
  $box.style = `width: 50px; text-align: center;`;

  const aumenta = function (event) {
    $box.innerText++;
    if ($box.innerText >= 10) {
      $box.innerText = 10;
    }
  };
  const riduci = function (event) {
    $box.innerText--;
    if ($box.innerText <= 0) {
      $box.innerText = 0;
    }
  };

  $buttonIncrease.addEventListener("click", aumenta);
  $buttonDecrease.addEventListener("click", riduci);
})();
