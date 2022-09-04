const formElement = document.querySelector("form");
const completeState = document.querySelector(".complete-state");
const buttonContinue = document.querySelector(".continue");

document.querySelector("#number").addEventListener("keyup", function (event) {
  let formatedNumber = this.value.split(" ").join("");
  const regExr = /.{1,4}/g;
  if (formatedNumber.length > 0) {
    formatedNumber = formatedNumber.match(regExr).join(" ");
  }
  this.value = formatedNumber;
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  form = {
    cardName: document.querySelector("#name"),
    nameError: document.querySelector(".nameError"),
    cardNumber: document.querySelector("#number"),
    cardNumberError: document.querySelector(".numberError"),
    dateMM: document.querySelector("#dateMM"),
    dateYY: document.querySelector("#dateYY"),
    dateError: document.querySelector(".dateError"),
    CVC: document.querySelector("#CVC"),
    CVCError: document.querySelector(".CVCError"),
  };

  card = {
    cardName: document.querySelector(".left-card-name"),
    cardNumber: document.querySelector(".left-card-number"),
    dateMM: document.querySelector(".left-card-dateMM"),
    dateYY: document.querySelector(".left-card-dateYY"),
    CVC: document.querySelector(".left-card-cvc"),
  };

  function checkValidationForEmpty({
    inputName: inputName,
    inputError: inputError,
  }) {
    function isInputNotEmpty(type) {
      return form[type].value;
    }

    if (isInputNotEmpty(inputName)) {
      card[inputName].innerText = form[inputName].value.toUpperCase();
      form[inputError].innerText = "";
      form[inputName].classList.remove("errorBorder");
    } else {
      form[inputError].innerText = "Can't be blank";
      form[inputName].classList.add("errorBorder");
    }
  }

  checkValidationForEmpty({
    inputName: "cardName",
    inputError: "nameError",
  });

  checkValidationForEmpty({
    inputName: "cardNumber",
    inputError: "cardNumberError",
  });

  checkValidationForEmpty({
    inputName: "dateMM",
    inputError: "dateError",
  });

  checkValidationForEmpty({
    inputName: "dateYY",
    inputError: "dateError",
  });

  checkValidationForEmpty({
    inputName: "CVC",
    inputError: "CVCError",
  });

  function checkValidationForFormat({
    inputName: inputName,
    inputError: inputError,
  }) {
    function itNotContainLetters(type) {
      const regExr = /[a-zA-Z]+/;
      return !regExr.test(form[type].value);
    }

    function checkIfAlreadyError() {
      if (form[inputError].innerText) {
        throw new Error("");
      }
    }

    if (itNotContainLetters(inputName)) {
      try {
        checkIfAlreadyError();
        form[inputError].innerText = "";
        form[inputName].classList.remove("errorBorder");
      } catch (e) {}
    } else {
      form[inputError].innerText = "Wrong format, numbers only";
      form[inputName].classList.add("errorBorder");
    }
  }

  checkValidationForFormat({
    inputName: "cardNumber",
    inputError: "cardNumberError",
  });

  checkValidationForFormat({
    inputName: "dateMM",
    inputError: "dateError",
  });

  checkValidationForFormat({
    inputName: "dateYY",
    inputError: "dateError",
  });

  checkValidationForFormat({
    inputName: "CVC",
    inputError: "CVCError",
  });

  function checkForAnyError() {
    if (form.nameError.innerText) {
      return "error";
    }

    if (form.cardNumberError.innerText) {
      return "error";
    }

    if (form.dateError.innerText) {
      return "error";
    }

    if (form.CVCError.innerText) {
      return "error";
    }

    return "";
  }

  if (!checkForAnyError()) {
    formElement.classList.add("hide");
    completeState.classList.remove("hide");
    form.cardName.value = "";
    form.cardNumber.value = "";
    form.dateMM.value = "";
    form.dateYY.value = "";
    form.CVC.value = "";
  }
});

buttonContinue.addEventListener("click", function () {
  formElement.classList.remove("hide");
  completeState.classList.add("hide");
});
