const { constants } = require("../helpers/constants");
exports.randomNumber = function (length) {
	var text = "";
	var possible = "123456789";
	for (var i = 0; i < length; i++) {
		var sup = Math.floor(Math.random() * possible.length);
		text += i > 0 && sup == i ? "0" : possible.charAt(sup);
	}
	return Number(text);
};

exports.sendEmail = function (email, otp) {
	// Html email body
	let html = "<p>Please Confirm your Account.</p><p>OTP: " + otp + "</p>";
	// Send confirmation email
	mailer.send(
		constants.confirmEmails.from,
		email,
		"Confirm Account",
		html
	).then(function (res) {
		// Save user.
		return res
	}).catch(err => {
		return err;
	});
}