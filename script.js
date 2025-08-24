const defaultPhone = "01735752241";
const pinNumber = "1234";
document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  const phoneNumber = document.getElementById("input-mobile");
  const phone = phoneNumber.value;
  const password = document.getElementById("pin").value;

  if (defaultPhone === phone && pinNumber === password) {
    window.location.href = "./home.html";
  } else {
    alert("number or pin not match");
  }
});
