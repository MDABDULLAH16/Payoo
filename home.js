function getInputValue(id) {
  const inputValue = document.getElementById(id);
  const valueString = inputValue.value;
  const value = parseInt(valueString);
  return value;
}

function getInputText(id) {
  const inputValue = document.getElementById(id);
  //   const value = inputValue.value;
  return inputValue;
}

function clearInput(id) {
  const inputText = document.getElementById(id);
  inputText.value = "";
}

function getInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  const convertIntoNumber = parseInt(innerText);
  return convertIntoNumber;
}
function setInnerText(id, text) {
  const findText = document.getElementById(id);
  findText.innerText = text;
}
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const account = getInputText("account-number");
    if (account.value === "" || account.length < 12) {
      alert("please input your 11 digit phone number");
      return;
    }

    const money = getInputText("input-amount");
    if (money.value === "" || money.value <= 0) {
      alert("please input valid amount !!");
      return;
    }
    const pin = getInputText("pin");
    if (pin.value !== "1234") {
      alert("please input the top secret pin in the world 1234 !!");
      return;
    }
    const availableMoney = getInnerText("available-money");
    const moneyInit = parseInt(money.value);
    const total = availableMoney + moneyInit;
    setInnerText("available-money", total);
    clearInput("input-amount");
  });
