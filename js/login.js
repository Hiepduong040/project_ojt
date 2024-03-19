// Elements của trang
const formLogin = document.getElementById("formLogin");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const alertError = document.getElementById("alertError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const userId = document.getElementById("")
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// Lắng nghe sk Submit
formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  let elementError = false;

  // Validate dữ liệu input
  if (!emailElement.value) {
    emailError.style.display = "block";
    emailError.innerHTML = "Email không được để trống";
    elementError = true;
  } else if (!validateEmail(emailElement.value)) {
    emailError.style.display = "block";
    emailError.innerHTML = "Email không đúng định dạng";
    elementError = true;
  } else {
    emailError.style.display = "none";
  }

  if (!passwordElement.value) {
    passwordError.style.display = "block";
    passwordError.innerHTML = "Mật khẩu không được để trống";
    elementError = true;
  } else {
    passwordError.style.display = "none";
  }

  if (elementError===true) {
    alertError.style.display = "none";
    return;
  }

  // Lấy dữ liệu từ local storage
  const userLocal = JSON.parse(localStorage.getItem("users")) || [];

  // Tìm kiếm email và mật khẩu người dùng nhập vào có tồn tại trong local storage không
  const findUser = userLocal.find(
    (user) =>
      user.email === emailElement.value && user.password === passwordElement.value
  );

  if (!findUser) {
    alertError.style.display = "block";
    alertError.innerHTML = "Tài khoản hoặc mật khẩu không chính xác";
  } else {
    alertError.style.display = "none";
    // Đăng nhập thành công và chuyển hướng về trang chủ
    window.location.href = "../index.html";
   //đẩy user name lên local và thay text btn login
   
    localStorage.setItem("name-user-current",JSON.stringify(findUser.userName));
    localStorage.setItem("check-login",JSON.stringify(findUser.userId)); //done đẩy id lên
    // lấy id giỏ hàng , lấy thông tin để thêm vào cart
  }

  // Lưu thông tin người dùng đăng nhập vào local storage
  localStorage.setItem("userLogin", JSON.stringify(findUser));
});