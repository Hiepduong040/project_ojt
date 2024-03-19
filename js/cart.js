
function renderTableCart() {
let products = JSON.parse(localStorage.getItem("products"));
let users = JSON.parse(localStorage.getItem("users"));
let checkLogin = JSON.parse(localStorage.getItem("check-login"));
    for(let i = 0 ; i < users.length ; i++){
        // duyệt qua từng phần tử mảng
        if(users[i].userId == checkLogin){
            
            // chứa tổng sp
            let elements = "";
            elements = `<h3>Tổng sản phẩm của bạn là: <span>${users[i].cart.length}</span></h3>`
            document.getElementById("totalCart").innerHTML = elements;
            // chứa sp
            let element = "";
            // Duyệt từng sp trong cart của user
            for(let j = 0; j < users[i].cart.length; j++){
            // Render từng sp
            element +=  `

            <tr>
              <th scope="row">${j}</th>
              <td>${users[i].cart[j].name}</td>
              <td>
                <img
                  style="width: 50px; height: 50px"
                  src=".${users[i].cart[j].image}"
                  alt=""
                />
              </td>
              <td>${users[i].cart[j].price}</td>
              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${users[i].cart[j].quantity}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                  ><button>+</button>&nbsp;&nbsp;&nbsp;<button>-</button></span
                >
              </td>
              <td>${users[i].cart[j].stock}</td>
            </tr>
            `
            }
            document.getElementById("bodyCart").innerHTML = element;
        }
    }
}

renderTableCart();
