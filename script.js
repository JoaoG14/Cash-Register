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

let cashInDrawer = 0;

for (let i = 0; i < cid.length; i++) {
  cashInDrawer = cashInDrawer + cid[i][1];
}

const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseButton = document.getElementById("purchase-btn");

let oneHundredCount = 0;
let twentyCount = 0;
let tenCount = 0;
let fiveCount = 0;
let oneCount = 0;
let quarterCount = 0;
let dimeCount = 0;
let nickelCount = 0;
let pennyCount = 0;

purchaseButton.addEventListener("click", () => {

  let cash = Number(cashInput.value);

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if (cash === price) {
    changeDue.innerHTML = "No change due - customer paid with exact cash";
    return;
  }

  


  cash = cash - price;

  while (cash > 100 && cid[8][1] >= 100) {
    cash -= 100;
    cid[8][1] -= 100;
  }
  while (cash > 20 && cid[7][1] >= 20) {
    cash -= 20;
    cid[7][1] -= 20;
  }
  while (cash > 10 && cid[6][1] >= 10) {
    cash -= 10;
    cid[6][1] -= 10;
  }
  while (cash > 5 && cid[5][1] >= 5) {
    cash -= 5;
    cid[5][1] -= 5;
  }
  while (cash > 1 && cid[4][1] >= 1) {
    cash -= 1;
    cid[4][1] -= 1;
  }
  while (cash > 0.25 && cid[3][1] >= 0.25) {
    cash -= 0.25;
    cid[3][1] -= 0.25;
  }
  while (cash > 0.1 && cid[2][1] >= 0.1) {
    cash -= 0.1;
    cid[2][1] -= 0.1;
  }
  while (cash > 0.05 && cid[1][1] >= 0.05) {
    cash -= 0.05;
    cid[1][1] -= 0.05;
  }
  while (cash > 0.01 && cid[0][1] >= 0.01) {
    cash -= 0.01;
    cid[0][1] -= 0.01;
  }

  console.log(cash);

  if (cash >= 0.01) {
    changeDue.innerHTML = `Status: INSUFFICIENT_FUNDS`;
  }

  if (cash === cashInDrawer) {
    changeDue.innerHTML = `Status: CLOSED`;
  }

  if (cash < 0.01 && cashInDrawer > 0) {
    changeDue.innerHTML = `Status: OPEN `;
    if (oneHundredCount > 0) {
      changeDue.innerHTML += `ONE HUNDRED: $${oneHundredCount * 100}`
    }
  }
});
