const billAmount = document.querySelector("#bill-Amount");
const cashGiven = document.querySelector("#cash-Given");
const checkBtn = document.querySelector("#check-Btn");
const clearBtn = document.querySelector("#clear-Btn");
const message = document.querySelector("#message");
const noteCount = document.querySelectorAll(".noteCount");
const table = document.querySelector(".table");
const notes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", validateAmount);

function validateAmount() {
  hideElem(message);
  const billAmountVal = convertStrToNum(billAmount.value);
  const cashGivenVal = convertStrToNum(cashGiven.value);
  console.log(billAmountVal, cashGivenVal);
  if (billAmountVal > 0) {
    if (cashGivenVal >= billAmountVal) {
      let changeAmount = cashGivenVal - billAmountVal;
      if (changeAmount) {
        calculateNotes(changeAmount);
        showElem(table);
      }
    } else {
      showMessage(
        "Cash given should be greater than or at least equal to bill amount"
      );
      showElem(message);
    }
  } else {
    showMessage("The bill amount should be greater than 0");
    showElem(message);
  }
}

function showMessage(msg) {
  message.innerHTML = msg;
}

function hideElem(elem) {
  elem.style.display = "none";
}
function showElem(elem) {
  elem.style.display = "block";
}

function calculateNotes(amount) {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotes = Math.trunc(amount / notes[i]);
    amount = amount % notes[i];
    noteCount[i].innerText = numberOfNotes;
  }
}
function convertStrToNum(val) {
  return Number(val);
}
clearBtn.addEventListener("click", () => {
  console.log("first");
  billAmount.value = "";
  cashGiven.value = "";
  noteCount.forEach((count) => (count.innerText = ""));
  hideElem(table);
});
