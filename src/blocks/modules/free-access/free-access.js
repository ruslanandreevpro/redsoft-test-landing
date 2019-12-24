import IMask from "imask";
import validator from "validator";

let isFormValid = false;
let isEmailValid = false;

IMask(
    document.getElementById("fa-email"), {
        mask: /^\S*@?\S*$/
    }
);

document.getElementById("fa-email").addEventListener("keyup", event => {
    isEmailValid = validator.isEmail(event.target.value);
    isFormValid = isEmailValid;
    document.getElementById("fa-submit").disabled = !isFormValid;
});

document.getElementById("fa-submit").addEventListener("click", event => {
    event.preventDefault();
    // document.getElementById("fa-form").submit();
    alert("Ваше заявка успешно отправлена");
    document.getElementById("fa-email").value = "";
    document.getElementById("fa-submit").disabled = true;
});