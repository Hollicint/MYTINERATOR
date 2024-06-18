let limit = 0;
let remainingAmount = 0;
// When the limit is add it will display on screen and the user will have to enter a - sign to show expenditure cost
function updateRemainingAmount() {
    const remainingElement = document.getElementById('remainingAmount');
    const formattedAmount = remainingAmount.toFixed(2);

    if (remainingAmount < 0) {
        remainingElement.innerText = `- €${Math.abs(formattedAmount)}`;
        remainingElement.style.color = 'red';
    } else {
        remainingElement.innerText = `€${formattedAmount}`;
        remainingElement.style.color = 'black';
    }
}

function addTransaction() {
    const details = document.getElementById('detailsId').value;
    const cost = parseFloat(document.getElementById('costInputAmount').value);

    if (!details || isNaN(cost)) {
        alert("Please enter valid details and cost.");
        return;
    }

    remainingAmount -= cost;
    updateRemainingAmount();

    const transactionList = document.getElementById('transactionList');
    const listItem = document.createElement('li');
    listItem.textContent = `Added: ${details} - €${cost.toFixed(2)}`;
    transactionList.appendChild(listItem);

    document.getElementById('detailsId').value = '';
    document.getElementById('costInputAmount').value = '';
}

function subtractTransaction() {
    const details = document.getElementById('detailsId').value;
    const cost = parseFloat(document.getElementById('costInputAmount').value);

    if (!details || isNaN(cost)) {
        alert("Please enter valid details and cost.");
        return;
    }

    remainingAmount += cost;
    updateRemainingAmount();

    const transactionList = document.getElementById('transactionList');
    const listItem = document.createElement('li');
    listItem.textContent = `Subtracted: ${details} - €${cost.toFixed(2)}`;
    transactionList.appendChild(listItem);

    document.getElementById('detailsId').value = '';
    document.getElementById('costInputAmount').value = '';
}

document.getElementById('limitAmountId').addEventListener('input', function() {
    limit = parseFloat(this.value);
    remainingAmount = limit;  
    updateRemainingAmount();
});
