/**
 * * Add event handler with the withdraw button
 * * Get the Withdraw amount form the withdraw input field & make sure convert input field to number by using parseFloat()
 * * Get previous withdraw amount
 * * calculate total withdraw amount
 * * set total withdraw amount
 *
 * * get the previous balance amount
 * * set the total balance
 *
 * * clear the input field
 */

document.getElementById("btn-withdraw").addEventListener('click', function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-amount");

  const previousWithdrawTotal = getTextElementValueById("total-withdraw");

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  setElementValueById("total-withdraw", newWithdrawTotal);

  const previousBalanceTotal = getTextElementValueById("total-balance");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  setElementValueById("total-balance", newBalanceTotal);
});

/* 
// step 1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step 2
  const withdrawField = document.getElementById("withdraw-amount");
  const withdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(withdrawAmountString);

  // step 3
  const withdrawTotalElement = document.getElementById("total-withdraw");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step 6
  const totalBalanceAmount = document.getElementById("total-balance");
  const previousTotalBalanceString = totalBalanceAmount.innerText;
  const previousBalanceTotal = parseFloat(previousTotalBalanceString);

  // clear input step
  withdrawField.value = "";

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("not enough money for withdrawal");
    return;
  }
  // step 4
  const currentWithdrawAmount = newWithdrawAmount + previousWithdrawTotal;
  // step 5
  withdrawTotalElement.innerText = currentWithdrawAmount;

  // step 7
  const currentBalance = previousBalanceTotal - newWithdrawAmount;
  // step 8
  totalBalanceAmount.innerText = currentBalance;
});

*/