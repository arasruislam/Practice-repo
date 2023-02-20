document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputAmountById("withdraw-amount");
    const previousWithdrawTotal = getTextValueById("total-withdraw");
    
    const totalWithdrawAmount = previousWithdrawTotal + newWithdrawAmount;
    setValueAmount("total-withdraw", totalWithdrawAmount);

    const previousBalanceAmount = getTextValueById("total-balance");
    const totalCurrentBalanceLeft = previousBalanceAmount - newWithdrawAmount;
    setValueAmount("total-balance", totalCurrentBalanceLeft);
});
