const billAmount = document.querySelector("#bill-amount");
const tipPercentage = document.querySelector("#tip-percentage");
const tipForm = document.querySelector("#tip-form");
const finalValue = document.querySelector("#final-value");
let billAmountValue;
let tipPercentageValue;

billAmount.addEventListener("input", function () {
  billAmountValue = Number(billAmount.value);
  console.log(typeof billAmountValue);
});

tipPercentage.addEventListener("input", function () {
  tipPercentageValue = Number(tipPercentage.value);
});

tipForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let finalAmount =
    billAmountValue + (tipPercentageValue * billAmountValue) / 100;

  console.log(finalAmount);
  finalValue.innerText = finalAmount;
});
