const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const pResult = document.querySelector("#result");
console.log(textInput, checkBtn, pResult);

checkBtn.addEventListener("click", () => {
  const initial = textInput.value;
  if (initial === "") {
    return alert("Please input a value");
  }
  const sanify = initial.replace(/[\W_]/g, "").toLowerCase();
  const inverted = sanify.split("").reverse().join("");
  if (sanify === inverted) {
    textInput.value = "";
    return (pResult.textContent = `${initial} is a palindrome`);
  } else {
    textInput.value = "";
    return (pResult.textContent = `${initial} is not a palindrome`);
  }
});
