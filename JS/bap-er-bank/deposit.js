/**
 1. add event handler into the deposit button
 2. get the deposit amount from the deposit input field and convert deposit field value into a number using parseFloat()
 3. reset the field after getting the value once

 4. get the current deposit total
 5. get the deposit amount from the current deposit total and convert into a number using parseFloat()
 6. set deposit field value into to total value

 7. get the current total amount
 8. get the total value and convert into a number
 9. Calculate current total balance and set total current balance
 */

// step 1
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step 2
  const depositField = document.getElementById("deposit-amount");
  const depositFieldValueString = depositField.value;
  const depositFieldValue = parseFloat(depositFieldValueString);

  // step 3
    depositField.value = "";
    
    // step 4
    const depositTotalAmount = document.getElementById("total-deposit");
    const depositTotalAmountString = depositTotalAmount.innerText;
    const previousDepositAmount = parseFloat(depositTotalAmountString);

    // step 5
    const newDepositAmount = previousDepositAmount + depositFieldValue;
    // step 6
    depositTotalAmount.innerText = newDepositAmount;

    // step 7
    const totalBalanceAmount = document.getElementById("total-balance");
    const previousTotalBalanceString = totalBalanceAmount.innerText;
    const previousBalanceTotal = parseFloat(previousTotalBalanceString);

    // step 8
    const totalBalance = previousBalanceTotal + newDepositAmount;
    totalBalanceAmount.innerText = totalBalance;

});
