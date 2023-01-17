document.getElementById('deposit-button').addEventListener('click', function() {
	const depositInput = document.getElementById('deposit-input');
	const userDepositInput = depositInput.value;
	const userNewDepositInput = parseFloat(userDepositInput);
	const depositBalance = document.getElementById('deposit-blance');
	const newDepositBlance = depositBalance.innerText;
	const prviousDepositBlance = parseFloat(newDepositBlance);
	const totalDepositBlance = userNewDepositInput + prviousDepositBlance;
	depositBalance.innerText = totalDepositBlance;
	//update blance
	const bankBlance = document.getElementById('bank-blance');
	const previousBankBlance = bankBlance.innerText;
	const currentBanckblance = parseFloat(previousBankBlance);
	const totalBankblance = totalDepositBlance;
	bankBlance.innerText = totalBankblance;
	depositInput.value = "";
});
// handle withdrow addEventListener
document.getElementById('withdrow-button').addEventListener('click', function() {
	const withdrowInput = document.getElementById('withdrow-input');
	const newWithdrowInput = withdrowInput.value;
	const previousWithdrowInput = parseFloat(newWithdrowInput);
	const widthdrowBlance = document.getElementById('withdrow-blance');
	const newWithdrowBlance = widthdrowBlance.innerText;
	const currentWithdrowBlance = parseFloat(newWithdrowBlance);
	const totalWithdrowBlance = previousWithdrowInput + currentWithdrowBlance;
	widthdrowBlance.innerText = totalWithdrowBlance;
	withdrowInput.value = "";
	// Update bank Blance
	const previousBankblance = document.getElementById('bank-blance');
	const newbankBlance = previousBankblance.innerText;
	const currentAddBankBlance = parseFloat(newbankBlance);
	const fixedBankBlance = currentAddBankBlance - totalWithdrowBlance;
	previousBankblance.innerText = fixedBankBlance;
})