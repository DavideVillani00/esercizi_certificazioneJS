let price = 19.5;
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
    const changeDueArr = [];
    let sumRegistrator = 0;
    cid.forEach((el) => {
      sumRegistrator += el[1];
    });
    // console.log(changeDue, sumRegistrator);
    if (sumRegistrator < changeDue) {
      changeDueDiv.textContent = "Status: INSUFFICIENT_FUNDS";
      return;
    } else {
      if (sumRegistrator === changeDue) {
        changeDueDiv.textContent = "Status: CLOSED";
      } else {
        changeDueDiv.textContent = "Status: OPEN";
      }
      cid.reverse().map((el, index) => {
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
          // !da sistemare questa parte, non utilizza la stessa moneta quando può
          console.log(changeDue, soldo);
          console.log("ciao", el[1] - soldo, changeDue - soldo);
          while (
            (el[1] - soldo).toFixed(2) >= 0 &&
            (changeDue - soldo).toFixed(2) > 0
          ) {
            changeDue -= soldo;
            el[1] -= soldo;
            changeDueArr.push([cid[index][0], soldo]);
          }
        }
      });
      const resultChangeDue = changeDueArr.filter((_, index, array) => {
        let money = "";
        let value = 0;
        if (index === 0) {
          money = changeDueArr[index][0];
          value = changeDueArr[index][1];
          return [money, value];
        } else {
          if (changeDueArr[index][0] == changeDueArr[index - 1][0]) {
            value = changeDueArr[index][1];
            array[index - 1][1] += value;
            return;
          } else {
            money = changeDueArr[index][0];
            value = changeDueArr[index][1];
            return [money, value];
          }
        }
      });

      resultChangeDue.forEach((el) => {
        changeDueDiv.textContent += ` ${el[0]}: $${el[1]}`;
      });
    }
  }
});
