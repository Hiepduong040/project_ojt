function renderTableCart() {
  let users = JSON.parse(localStorage.getItem("users"));
  let checkLogin = JSON.parse(localStorage.getItem("check-login"));
  let totalBill = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId == checkLogin) {
      let element = "";
      for (let j = 0; j < users[i].cart.length; j++) {
        element += `
          <tr >
            <td style="vertical-align: middle;" scope="row"> <b>${j + 1}</b></td>
            <td style="vertical-align: middle;">${users[i].cart[j].name}</td>
            <td style="vertical-align: middle;">
              <img
                style="width: 50px; height: 50px"
                src=".${users[i].cart[j].image}"
                alt=""
              />
            </td>
            <td style="vertical-align: middle;">${users[i].cart[j].price}.000 VNĐ</td>
            <td style="vertical-align: middle;">
              <span>
                <button onclick="increaseQuantityCart(${users[i].cart[j].id})">+</button>
                ${users[i].cart[j].quantity}
                <button onclick="reduceQuantityCart(${users[i].cart[j].id})">-</button>
              </span>
            </td>
            <td style="vertical-align: middle;">${users[i].cart[j].totalPrice}.000 VNĐ</td>
            <td style="vertical-align: middle;"><button style="background-color: var(--bs-table-bg);" onclick="deleteProductCart(${users[i].cart[j].id})"><ion-icon style="color:red;" name="trash-outline" ></ion-icon></button></td>
          </tr>
        `;
        totalBill += users[i].cart[j].totalPrice;
      }   
      document.getElementById("bodyCart").innerHTML = element;   
      let elements = `
        <h3>Tổng bill của bạn là: <span>${totalBill}.000 VNĐ</span></h3>
      `;
      document.getElementById("tfootCart").innerHTML = elements;
      break; // Thoát khỏi vòng lặp vì đã tìm thấy người dùng
    }
  }
}

function reduceQuantityCart(idItem) {
  let users = JSON.parse(localStorage.getItem("users"));
  let checkLogin = JSON.parse(localStorage.getItem("check-login"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId == checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        if (idItem == users[i].cart[j].id) {
          if (users[i].cart[j].quantity > 0) {
            users[i].cart[j].quantity -= 1;
            //tổng 1 sp khi giảm 
            users[i].cart[j].totalPrice = users[i].cart[j].quantity * users[i].cart[j].price;
            localStorage.setItem("users", JSON.stringify(users));
            renderTableCart();
           
          }
        }
      }
    }
  }
}

function increaseQuantityCart(idItem) {
  let users = JSON.parse(localStorage.getItem("users"));
  let checkLogin = JSON.parse(localStorage.getItem("check-login"));
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId == checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        if (idItem == users[i].cart[j].id) {
          
          if (users[i].cart[j].quantity > -1) {
            users[i].cart[j].quantity += 1;
            //tổng 1 sp khi tăng
            users[i].cart[j].totalPrice = users[i].cart[j].quantity * users[i].cart[j].price;
            localStorage.setItem("users", JSON.stringify(users));
            renderTableCart();
            
          }
        }
      }
    }
  }
}

function tableBill() {
  let users = JSON.parse(localStorage.getItem("users"));
  let checkLogin = JSON.parse(localStorage.getItem("check-login"));

  for (let i = 0; i < users.length; i++) {
    if (users[i].userId == checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        // tính tổng 1 sản phẩm
        users[i].cart[j].totalPrice = users[i].cart[j].quantity * users[i].cart[j].price;
        localStorage.setItem("users", JSON.stringify(users));
        renderTableCart();
      }
      break; // Thoát khỏi vòng lặp vì đã tìm thấy người dùng
    }
  }
}
tableBill();

function deleteProductCart(idItem) {
  let users = JSON.parse(localStorage.getItem("users"));
  let checkLogin = JSON.parse(localStorage.getItem("check-login"));
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId == checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {console.log("11111111",users[i].cart[j].id,idItem);
        if (idItem == users[i].cart[j].id) {
          
          users[i].cart.splice(j,1);
          
          localStorage.setItem("users", JSON.stringify(users));
          renderTableCart();
        }
      }
    }
  }
}
