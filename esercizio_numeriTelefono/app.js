const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const pResult = document.querySelector("#results-div");

const pattern = [
  /^[1]{1} [\d]{3}-[\d]{3}-[\d]{4}$/,
  /^[1]{1} \([\d]{3}\) [\d]{3}-[\d]{4}$/,
  /^[1]{1}\([\d]{3}\)[\d]{3}-[\d]{4}$/,
  /^[1]{1} [\d]{3} [\d]{3} [\d]{4}$/,
  /^[\d]{10}$/,
  /^[\d]{3}-[\d]{3}-[\d]{4}$/,
  /^\([\d]{3}\)[\d]{3}-[\d]{4}$/,
];

clearBtn.addEventListener("click", () => (pResult.textContent = ""));
checkBtn.addEventListener("click", () => {
  let valid = false;
  const number = userInput.value;
  if (number == "") {
    return alert("Please provide a phone number");
  }

  pattern.forEach((el) => {
    if (el.test(number)) {
      valid = true;
    }
  });
  pResult.textContent = valid
    ? `Valid US number: ${number}`
    : `Invalid US number: ${number}`;
});
