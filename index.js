document.getElementById("login-button").addEventListener('click', function() {
	const emailField = document.getElementById('user-email');
	const userEmail = emailField.value;
	//GET USER PASWORD
	const passwordField = document.getElementById("user-password");
	const userPassword = passwordField.value;
	if (userEmail == "info@gmail.com" && userPassword == "secret") {
		window.location.href = "index.html";
	}
});