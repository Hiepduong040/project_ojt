//Lấy ra element của trang

const formRegister = document.getElementById("form-register");
const userNameElement = document.getElementById("user-add");
const emailElement = document.getElementById("email-add");
const passwordElement = document.getElementById("pass-word");
const repasswordElement = document.getElementById("re-pass-word");
const addressElement = document.getElementById("address");

//Liên quan đến lỗi
const userNameError = document.getElementById("userNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const rePasswordError = document.getElementById("rePasswordError");

//Lấy dữ liệu từ localStoragr
const userLocal = JSON.parse(localStorage.getItem("users")) || [];
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
// lắng nghe sk dki tk
formRegister.addEventListener("submit", function(e) {
    // Ngăn chặn sự kiện load lại trang
    e.preventDefault();
    //validate data
    if(!userNameElement.value) {    
        userNameError.style.display = "block";
    }else {
        userNameError.style.display = "none";
    }
    if(!emailElement.value) {    
        emailError.style.display = "block";
        emailError.innerHTML = "Email không hợp lệ";
    }else {
        emailError.style.display = "none";
        if (!validateEmail(emailElement.value)){
            emailError.style.display = "block";
            emailError.innerHTML = "Email không đúng định dạng";
        }
    }
    if(!passwordElement.value) {    
        passwordError.style.display = "block";

    }else {
        passwordError.style.display = "none";
    }
    if(!repasswordElement.value) {    
        rePasswordError.style.display = "block";
    }else {
        rePasswordError.style.display = "none";
    }
    if(passwordElement.value !== repasswordElement.value){
        
        rePasswordError.style.display = "block";
        rePasswordError.innerHTML = "Mật khẩu không khớp";
    }else{
        rePasswordError.style.display = "none";
    }

    // Gửi dữ liệu tử form lên localStorage
    if (userNameElement.value && 
        emailElement.value &&
        passwordElement.value &&
        repasswordElement.value &&
        passwordElement.value === 
        repasswordElement.value &&
         validateEmail(emailElement.value)) {
        // Lấy dữ liệu từ form và gộp thành đối tượng user 
        const user = {
            cart:[],
            userId: Math.ceil(Math.random()*1000000000 ),
            userName: userNameElement.value,
            email: emailElement.value,
            password: passwordElement.value,
            address: addressElement.value,
        };
        //Push user và trong userLocal
        userLocal.push(user);
        // Lưu trữ dữ liệu lên local
        localStorage.setItem("users", JSON.stringify(userLocal));
        //Chuyển hướng về trang đăng nhập, set timeout
        setTimeout(function(){
        window.location.href = "login.html"
        },1000);
    }
});