document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputAmountById("deposit-amount");
  const previousDepositTotal = getTextValueById("total-deposit");

  // total deposit value
    const totalDepositAmount = newDepositAmount + previousDepositTotal;
    
    setValueAmount("total-deposit", totalDepositAmount);

    const previousBalanceAmount = getTextValueById("total-balance");
    const totalBalanceAmount = previousBalanceAmount + newDepositAmount;
    setValueAmount("total-balance", totalBalanceAmount);
});
