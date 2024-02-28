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

const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseButton = document.getElementById("purchase-btn");

purchaseButton.addEventListener("click", () => {
  if (cashInput.value < 1.87) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if (parseInt(cashInput.value) === 1.87) {
    changeDue.innerText = "No change due - customer paid with exact cash"
  }
});
