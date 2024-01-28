// ?=====================>>>Elements===============================
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var phoneInput = document.getElementById("phoneInput");
var ageInput = document.getElementById("ageInput");
var passwordInput = document.getElementById("passwordInput");
var repasswordInput = document.getElementById("repasswordInput");
var altername = document.getElementById("altername");
var alterEmail = document.getElementById("alterEmail");
var alterPhone = document.getElementById("alterPhone");
var alterAge = document.getElementById("alterAge");
var alterPassword = document.getElementById("alterPassword");

// ^=========================>>>function===========================
function inputValidation(alterId, valid) {
    valid ? $(alterId).removeClass("d-block").addClass("d-none") : $(alterId).addClass("d-block").removeClass("d-none");
}
//  &============================>>>Events=========================
nameInput.addEventListener("input", function () {
    let nameval = nameInput.value;
    let regux = /^[a-zA-Z]+$/;
    inputValidation(altername, regux.test(nameval))
})
phoneInput.addEventListener("input", function () {
    let phoneval = phoneInput.value;
    var regex = /^\d{11}$/;
    inputValidation(alterPhone, regex.test(phoneval))
})
emailInput.addEventListener("input", function () {
    let emailval = emailInput.value;
    var regex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    inputValidation(alterEmail, regex.test(emailval))
})
ageInput.addEventListener("input", function () {
    let ageval = ageInput.value;
    var regex = /^\d{1,3}$/;
    inputValidation(alterAge, regex.test(ageval))
})
passwordInput.addEventListener("input", function () {
    let passval = passwordInput.value;
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    inputValidation(alterPassword, regex.test(passval))
})
repasswordInput.addEventListener("input", function () {
    let repasswordval = repasswordInput.value;
    let passval = passwordInput.value;

    inputValidation(alterRepass, passval == repasswordval)
})
