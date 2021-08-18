// get input value  
function getinput(inputId) {
    const getInputId = document.getElementById(inputId);
    const inputValue = parseFloat(getInputId.value);
    getInputId.value = '';
    return inputValue;
}

// get innerText value for both diposit and withdraw 
function getInnerText(pInputId, getValue) {
    const getTextValue = document.getElementById(pInputId);
    const textValue = parseFloat(getTextValue.innerText);
    const currentValue = textValue + getValue;
    getTextValue.innerText = currentValue;
}


// handle sum of incriment and decriment of main balance
function getMainBalance() {
    const getBalnace = document.getElementById('balance-total');
    const accountBalance = parseFloat(getBalnace.innerText);
    return accountBalance;
}

function updateBalance(addBalance, isAdd) {
    const getBalnace = document.getElementById('balance-total');
    // const accountBalance = parseFloat(getBalnace.innerText);
    const preBalance = getMainBalance();
    if (isAdd == true) {
        const currentBalance = preBalance + addBalance;
        getBalnace.innerText = currentBalance;
    }
    else {
        const currentBalance = preBalance - addBalance;
        getBalnace.innerText = currentBalance;
    }
}

// event handler for Diposit button 
document.getElementById('diposit-btn').addEventListener('click', function () {
    const dipositvalue = getinput('diposit-input');
    if (dipositvalue > 0) {
        const currentDiposit = getInnerText('diposit-money', dipositvalue);
        const totalDiposit = updateBalance(dipositvalue, true);
    }
})

// event Handler for withdraw button 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawValue = getinput('withdraw-input');
    const currentBalance = getMainBalance();
    if (withdrawValue > 0 && withdrawValue <= currentBalance) {
        const currentWithdaw = getInnerText('withdraw-balance', withdrawValue);
        const totalWithdraw = updateBalance(withdrawValue, false);
    }
})