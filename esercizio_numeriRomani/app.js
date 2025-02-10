const romansNumbers = {
  4: "IV",
  5: "V",
  9: "IX",
  40: "XL",
  50: "L",
  90: "XC",
  400: "CD",
  500: "D",
  900: "CM",
};

const numberInput = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

convertBtn.addEventListener("click", () => {
  const number = numberInput.value;
  numberInput.value = "";
  output.textContent = "";
  if (!Number(number)) {
    return (output.textContent = "Please enter a valid number");
  }
  if (number < 1) {
    return (output.textContent =
      "Please enter a number greater than or equal to 1");
  }
  if (number > 3999) {
    return (output.textContent =
      "Please enter a number less than or equal to 3999");
  }
  output.textContent = converter(number);
});

function converter(number) {
  let somma = "";
  const lunghezza = number.length;
  const inverso = number.split("").reverse();
  for (let n = lunghezza; n > 0; n--) {
    switch (n) {
      // migliaia
      case 4:
        let migliaia = "";
        for (let i = 0; i < inverso[3]; i++) {
          migliaia += "M";
        }
        somma += migliaia;
        break;

      // centinaia
      case 3:
        let centinaia = "";
        if (inverso[2] < 4) {
          for (let i = 0; i < inverso[2]; i++) {
            centinaia += "C";
          }
        } else if (inverso[2] > 5 && inverso[2] < 9) {
          centinaia += "D";
          for (let i = 5; i < inverso[2]; i++) {
            centinaia += "C";
          }
        } else {
          centinaia += romansNumbers[inverso[2] * 100];
        }
        somma += centinaia;
        break;
      // decine
      case 2:
        let decine = "";
        if (inverso[1] < 4) {
          for (let i = 0; i < inverso[1]; i++) {
            decine += "X";
          }
        } else if (inverso[1] > 5 && inverso[1] < 9) {
          decine += "L";
          for (let i = 5; i < inverso[1]; i++) {
            decine += "X";
          }
        } else {
          decine += romansNumbers[inverso[1] * 10];
        }
        somma += decine;
        break;
      // unità
      case 1:
        let unita = "";
        if (inverso[0] < 4) {
          for (let i = 0; i < inverso[0]; i++) {
            unita += "I";
          }
        } else if (inverso[0] > 5 && inverso[0] < 9) {
          unita += "V";
          for (let i = 5; i < inverso[0]; i++) {
            unita += "I";
          }
        } else {
          unita += romansNumbers[inverso[0]];
        }
        somma += unita;
        break;
    }
  }
  return somma;
}
