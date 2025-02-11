const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-])?\d{3}([\s-])?\d{4}$/;

checkBtn.addEventListener("click", function () {
  const number = userInput.value;

  if (!number) {
    alert("Please provide a phone number");
    return;
  }

  const valid = pattern.test(number);
  resultsDiv.textContent =
    (valid ? "Valid US number: " : "Invalid US number: ") + number;
});

clearBtn.addEventListener("click", function () {
  resultsDiv.textContent = "";
});
