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

  while (cash >= 100 && cid[8][1] >= 100) {
    cash -= 100;
    cid[8][1] -= 100;
    oneHundredCount++;
  }
  while (cash >= 20 && cid[7][1] >= 20) {
    cash -= 20;
    cid[7][1] -= 20;
    twentyCount++;
  }
  while (cash >= 10 && cid[6][1] >= 10) {
    cash -= 10;
    cid[6][1] -= 10;
    tenCount++;
  }
  while (cash >= 5 && cid[5][1] >= 5) {
    cash -= 5;
    cid[5][1] -= 5;
    fiveCount++;
  }
  while (cash >= 1 && cid[4][1] >= 1) {
    cash -= 1;
    cid[4][1] -= 1;
    oneCount++;
  }
  while (cash >= 0.25 && cid[3][1] >= 0.25) {
    cash -= 0.25;
    cid[3][1] -= 0.25;
    quarterCount++;
  }
  while (cash >= 0.1 && cid[2][1] >= 0.1) {
    cash -= 0.1;
    cid[2][1] -= 0.1;
    dimeCount++;
  }
  while (cash >= 0.05 && cid[1][1] >= 0.05) {
    cash -= 0.05;
    cid[1][1] -= 0.05;
    nickelCount++;
  }
  while (cash >= 0.01 && cid[0][1] >= 0.01) {
    cash -= 0.01;
    cid[0][1] -= 0.01;
    pennyCount++;
  }

  console.log(cash);

  if (cash >= 0.01) {
    changeDue.innerHTML = `Status: INSUFFICIENT_FUNDS`;
  }

  if (cash === cashInDrawer) {
    changeDue.innerHTML = `Status: CLOSED`;
  }

  if (cash < 0.01 && cashInDrawer > 0) {
    changeDue.innerHTML = `Status: OPEN<br>`;
    if (oneHundredCount > 0) {
      changeDue.innerHTML += `<br>ONE HUNDRED: $${oneHundredCount * 100}`
    }
    if (twentyCount > 0) {
      changeDue.innerHTML += `<br>TWENTY: $${twentyCount * 20}`
    }
    if (tenCount > 0) {
      changeDue.innerHTML += `<br>TEN: $${tenCount * 10}`
    }
    if (oneCount > 0) {
      changeDue.innerHTML += `<br>ONE: $${oneCount * 1}`
    }
    if (quarterCount > 0) {
      changeDue.innerHTML += `<br>QUARTER: $${quarterCount * 0.25}`
    }
    if (dimeCount > 0) {
      changeDue.innerHTML += `<br>DIME: $${dimeCount * 0.1}`
    }
    if (nickelCount > 0) {
      changeDue.innerHTML += `<br>NICKEL: $${nickelCount * 0.05}`
    }
    if (pennyCount > 0) {
      changeDue.innerHTML += `<br>PENNY: $${pennyCount * 0.01 + 0.01}`
    }
  }
});
