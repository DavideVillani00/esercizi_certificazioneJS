let price = 1.87;
let cid = [
  ["PENNY", 1.01], //0.01$
  ["NICKEL", 2.05], //0.05$
  ["DIME", 3.1], //0.10$
  ["QUARTER", 4.25], //0.25$
  ["ONE", 90], //1$
  ["FIVE", 55], //5$
  ["TEN", 20], //10$
  ["TWENTY", 60], //20$
  ["ONE HUNDRED", 100], //100$
];

const cashInput = document.querySelector("#cash");
const changeDueDiv = document.querySelector("#change-due");
const purchaseBtn = document.querySelector("#purchase-btn");

purchaseBtn.addEventListener("click", () => {
  const cash = cashInput.value;
  let changeDue = cash - price;
  console.log(changeDue);
  if (changeDue < 0) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (changeDue === 0) {
    changeDueDiv.textContent = "No change due - customer paid with exact cash";
    return;
  } else {
    // se l'importo della cassa è superiore al resto
    // si deve dare i soldi partendo da quello che vale di piu e scendendo
    // , poi si sottrae dalla cassa i soldi con le monete esatte
    // e si mostra il resto
    // ad ogni click btn controlli lo stato della cassa e aggiorni il p
    let sumRegistrator = 0;
    cid.forEach((el) => sumRegistrator + el[1]);
    if (sumRegistrator < changeDue) {
      changeDueDiv.textContent = "Status: INSUFFICIENT_FUNDS";
      return;
    } else {
      cid.reverse().map((el) => {
        if (changeDue > 0 && sumRegistrator > 0) {
          let soldo;

          switch (el[0]) {
            case "ONE HUNDRED":
              soldo = 100;
              break;
            case "TWENTY":
              soldo = 20;
              break;
            case "TEN":
              soldo = 10;
              break;
            case "FIVE":
              soldo = 5;
              break;
            case "ONE":
              soldo = 1;
              break;
            case "QUARTER":
              soldo = 0.25;
              break;
            case "DIME":
              soldo = 0.1;
              break;
            case "NICKEL":
              soldo = 0.05;
              break;
            default:
              soldo = 0.01;
              break;
          }
          while (
            (el[1] - soldo).toFixed(2) >= 0 &&
            (changeDue - soldo).toFixed(2) > 0
          ) {
            changeDue -= soldo;
            el[1] -= soldo;
            console.log(changeDue.toFixed(2), soldo);
          }
        }
      });
    }
    console.log(cid);
  }
});
