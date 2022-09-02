const submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const errorMessage = document.createElement("p");
  errorMessage.innerText = "asdsad";
  rightCard = {
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

  leftCard = {
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
      return rightCard[type].value;
    }

    if (isInputNotEmpty(inputName)) {
      leftCard[inputName].innerText = rightCard[inputName].value.toUpperCase();
      rightCard[inputError].innerText = "";
      rightCard[inputName].classList.remove("errorBorder");
    } else {
      rightCard[inputError].innerText = "Can't be blank";
      rightCard[inputName].classList.add("errorBorder");
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

  //   function CheckValidationForFormat({
  //     inputName: inputName,
  //     inputError: inputError,
  //   }) {}
});
