const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const pResult = document.querySelector("#results-div");

// ncell = 10 numeri
// nprefisso all'inizio (1)
// le parentesi possono circondare solo i primi 3 numeri escluso il prefisso

clearBtn.addEventListener("click", () => (pResult.textContent = ""));
checkBtn.addEventListener("click", () => {
  let valid = false;
  const number = userInput.value;
  if (number == "") {
    return alert("Please provide a phone number");
  }
  const clearNumber = number.match(/\d/g);
  const numberLength = clearNumber.length;
  console.log(clearNumber, numberLength, valid);
  if (numberLength < 10) {
    console.log("troppo corto");
    return (valid = false);
  }
  const prefixLength = numberLength - 10;
  console.log(prefixLength);

  if (prefixLength > 0) {
    const prefix = clearNumber.slice(0, prefixLength);
    console.log(prefix);
    if (prefix.join() != 1) {
      console.log("prefisso non valido", prefix);
      return (valid = false);
    }
    console.log("prefisso valido");
  }

  console.log(clearNumber, valid);

  pResult.textContent = valid
    ? `Valid US number: ${number}`
    : `Invalid US number: ${number}`;
});
