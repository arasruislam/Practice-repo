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

// step 1
document.getElementById("btn-withdraw").addEventListener('click', function () {
  // step 2
  const withdrawField = document.getElementById("withdraw-amount");
  const withdrawFieldValueString = withdrawField.value;
  const withdrawFieldValue = parseFloat(withdrawFieldValueString);

  // reset
  withdrawField.value = "";

  // step 3
  const withdrawTotalAmount = document.getElementById("total-withdraw");
  const previousWithdrawTotalString = withdrawTotalAmount.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step 4
  const currentTotalWithdraw = previousWithdrawTotal + withdrawFieldValue;

  // set current withdraw amount
  withdrawTotalAmount.innerText = currentTotalWithdraw;

  // step 7
  const totalBalanceAmount = document.getElementById("total-balance");
  const previousTotalBalanceString = totalBalanceAmount.innerText;
    const previousBalanceTotal = parseFloat(previousTotalBalanceString);
    
    const currentBalance = previousBalanceTotal - withdrawFieldValue;
    totalBalanceAmount.innerText = currentBalance;

});