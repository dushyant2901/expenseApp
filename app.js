const billAmount = document.querySelector("#bill-Amount")
const cashGiven = document.querySelector("#cash-Given")
const checkBtn = document.querySelector("#check-Btn")
const message = document.querySelector("#message")
const noteCount = document.querySelectorAll(".noteCount")
const notes = [2000, 500, 100, 20, 10, 5, 1]

checkBtn.addEventListener("click", validateAmount)

function validateAmount() {
    hideMessage()

    if (billAmount.value >= 0) {
        if (cashGiven.value >= billAmount.value) {

            let changeAmount = cashGiven.value - billAmount.value;
console.log("kkkkkkkkkkkkkkkkkk")
            calculateNotes(changeAmount);
        }
        else { showMessage("Cash given should be greater than or at least equal to bill amount") }




    } else {
        showMessage("The bill amount should be greater than 0")
    }


}

function showMessage(msg) {
    message.style.display = "block"
    message.innerHTML = msg
}

function hideMessage() {
    message.style.display = "none"

}

function calculateNotes(amount) {
    for (let i = 0; i < notes.length; i++) {
        const numberOfNotes = Math.trunc(amount / notes[i])
        amount = amount % notes[i]
        noteCount[i].innerText = numberOfNotes
    }


}