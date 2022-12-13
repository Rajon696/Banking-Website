document.getElementById('depo-button').addEventListener('click', function () {
    // Get Deposit Amount from depo Field
    const depositFund1 = document.getElementById('deposit-fund');
    const depositInput = depositFund1.value;
    const depositAmount = parseFloat(depositInput);
    
    // Total Deposit Calculation

    const depositTotal = document.getElementById('deposit-total');
    // depositTotal.innerText = depositInput;
    const previousDeposit = depositTotal.innerText;
    const previousAmount = parseFloat(previousDeposit);
    const newBalance = previousAmount + depositAmount;
    depositTotal.innerText = newBalance;

    // Update Total Balance Here
    const totalBalance = document.getElementById('total-balance');
    const nextBalance = totalBalance.innerText;
    const balanceAmount = parseFloat(nextBalance);
    const newBalanceTotal = balanceAmount + depositAmount;
    totalBalance.innerText = newBalanceTotal;

    // clear input value
    depositFund1.value = '';
})

// Withdraw Amount
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const fundWithdraw = withdrawInput.value;
    const withdrawAmount = parseFloat(fundWithdraw);

    // withdraw section
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawValue = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(withdrawValue);
    const newWithdraw = previousWithdraw + withdrawAmount;

    // Total Withdraw
    withdrawTotal.innerText = newWithdraw;

    // Update withdraw Balance Here
    const totalBalance = document.getElementById('total-balance');
    const nextBalance = totalBalance.innerText;
    const balanceAmount = parseFloat(nextBalance);
    const newBalanceTotal = balanceAmount - withdrawAmount;
    totalBalance.innerText = newBalanceTotal;


    // clear Value 
    withdrawInput.value = '';

})