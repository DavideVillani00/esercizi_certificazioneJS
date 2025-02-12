let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const cashInput = document.querySelector("#cash");
const changeDueDiv = document.querySelector("#change-due");
const purchaseBtn = document.querySelector("#purchase-btn");

purchaseBtn.addEventListener("click", () => {
  const cash = cashInput.value;
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (cash == price) {
    changeDueDiv.textContent = "No change due - customer paid with exact cash";
    return;
  } else {
    // se l'importo della cassa è superiore al resto
    // si deve dare i soldi partendo da quello che vale di piu e scendendo
    // , poi si sottrae dalla cassa i soldi con le monete esatte
    // e si mostra il resto
    // ad ogni click btn controlli lo stato della cassa e aggiorni il p
  }
});
