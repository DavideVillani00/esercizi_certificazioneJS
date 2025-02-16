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
    let changeDueArr = [];
    let sumRegistrator = 0;
    cid.forEach((el) => {
      sumRegistrator += el[1];
    });

    if (sumRegistrator < changeDue) {
      changeDueDiv.textContent = "Status: INSUFFICIENT_FUNDS";
      return;
    } else {
      if (sumRegistrator == changeDue) {
        changeDueDiv.textContent = "Status: CLOSED";
      } else {
        changeDueDiv.textContent = "Status: OPEN";
      }
      cid.reverse().forEach((el, index) => {
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

          while (el[1] - soldo >= 0 && changeDue - soldo >= 0) {
            console.log(
              "el[1]",
              el[1],
              "soldo",
              soldo,
              "changeDue",
              changeDue,
              "el[1] - soldo",
              el[1] - soldo,
              "changeDue - soldo",
              changeDue - soldo
            );
            changeDue = Number((changeDue - soldo).toFixed(2));
            el[1] = Number((el[1] - soldo).toFixed(2));
            console.log(soldo);
            changeDueArr.push([cid[index][0], soldo]);
          }
        }
      });
      // funzione per sommare duplicati
      function sumDuplicate(arr) {
        let somma = {};

        arr.forEach(([currency, amount]) => {
          if (somma[currency]) {
            somma[currency] = Number((somma[currency] + amount).toFixed(2));
          } else {
            somma[currency] = amount;
          }
        });
        return Object.entries(somma);
      }
      changeDueArr = sumDuplicate(changeDueArr);
      console.log(changeDue);
      if (changeDue != 0) {
        changeDueDiv.textContent = "Status: INSUFFICIENT_FUNDS";
      } else if (sumRegistrator == 0) {
        changeDueDiv.textContent = "Status: CLOSED";
      } else {
        changeDueArr.forEach((el) => {
          changeDueDiv.textContent += ` ${el[0]}: $${el[1]}`;
        });
      }
    }
  }
});
