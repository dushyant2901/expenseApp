const billAmount = document.querySelector("#bill-Amount");
const cashGiven = document.querySelector("#cash-Given");
const checkBtn = document.querySelector("#check-Btn");
const clearBtn = document.querySelector("#clear-Btn");
const message = document.querySelector("#message");
const noteCount = document.querySelectorAll(".noteCount");
const table = document.querySelector(".table");
const notes = [2000, 500, 100, 20, 10, 5, 1];

// show message
function showMessage(msg) {
  message.innerHTML = msg;
}
// hide element
function hideElem(elem) {
  elem.style.display = "none";
}
// show element
function showElem(elem) {
  elem.style.display = "block";
}
// converting string to number
function convertStrToNum(val) {
  return Number(val);
}
// validating amount
function validateAmount() {
  hideElem(message);
  const billAmountVal = convertStrToNum(billAmount.value);
  const cashGivenVal = convertStrToNum(cashGiven.value);
  console.log(billAmountVal, cashGivenVal);
  if (billAmountVal > 0) {
    if (cashGivenVal >= billAmountVal) {
      let changeAmount = cashGivenVal - billAmountVal;

      calculateNotes(changeAmount);
      showElem(table);
    } else {
      showMessage(
        "Cash given should be greater than or at least equal to bill amount"
      );
      showElem(message);
      hideElem(table);
    }
  } else {
    showMessage("The bill amount should be greater than 0");
    showElem(message);
    hideElem(table);
  }
}

// to calculate notes for the remainder amount
function calculateNotes(amount) {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotes = Math.trunc(amount / notes[i]);
    amount = amount % notes[i];
    noteCount[i].innerText = numberOfNotes;
  }
}
// to clear all the values
function clear() {
  billAmount.value = "";
  cashGiven.value = "";
  noteCount.forEach((count) => (count.innerText = ""));
  hideElem(table);
  hideElem(message);
}
// attaching eventlistener to clearbtn
clearBtn.addEventListener("click", clear);
// attaching eventlistener to checkbtn
checkBtn.addEventListener("click", validateAmount);
