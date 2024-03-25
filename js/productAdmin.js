let flag;
function renderProduct() {
    let products = JSON.parse(localStorage.getItem("products"));
    
    let element=""
    for(let i = 0 ; i< products.length; i++){
      element += `
        <tr >
            <th scope="row">${i+1}</th>
            <td>${products[i].id}</td>
            <td>${products[i].name}</td>
            <td>
                <img
                style="width: 50px; height: 50px"
                src=".${products[i].image}"
                alt=""
                />
            </td>
            <td>${products[i].price}.000 VNĐ</td>

            <td>
                <div class="buttonActive">
                <button type="button" id="updateProduct" onclick=" btnEditUser(${products[i].id})" class="btn btn-success">Sửa</button
                ><button type="button" id="deleteProduct" onclick="deleteProduct(${products[i].id})" class="btn btn-danger">Xóa</button>
                </div>
                </td>
        </tr>      
      `
    }
    
    document.getElementById("renderProduct").innerHTML = element;
  }
  renderProduct();

  function deleteProduct(idItem){
    let products = JSON.parse(localStorage.getItem("products"));
    let users = JSON.parse(localStorage.getItem("users"));
    for(let i = 0; i <products.length ; i++){
      
      if(idItem == products[i].id ){
        console.log("111111111111",products[i]);
        products.splice(i,1);
        
      }
    }
    localStorage.setItem("products", JSON.stringify(products));
    renderProduct();
  }
  
  function searchUser(){
    let products = JSON.parse(localStorage.getItem("products"));
    let userProduct = document.getElementById("inputProductName").value;
    let idProduct = document.getElementById("inputProductId").value;
    let searchUserName = document.getElementById("nameSearch").value;
    let searchUserId = document.getElementById("nameSearch").value;
    let data = [];
    for(let i = 0; i <products.length; i++){
        if(products[i].name.includes(searchUserName) ==true  ){
            data.push(products[i]);

        }
    }
    for(let i = 0; i <products.length; i++){
        if( products[i].id == searchUserId ){
            data.push(products[i]);

        }
    }

    console.log("11111111111111",data);

    let text ="";
    for (let i = 0; i < data.length; i++) {
        text +=
        `
        <tr >
            <th scope="row">${i+1}</th>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>
                <img
                style="width: 50px; height: 50px"
                src=".${data[i].image}"
                alt=""
                />
            </td>
            <td>${data[i].price}.000 VNĐ</td>

            <td>
                <div class="buttonActive">
                <button type="button" id="updateProduct" onclick=" btnEditUser(${data[i].id})" class="btn btn-success">Sửa</button
                ><button type="button" id="deleteProduct" onclick="deleteProduct(${data[i].id})" class="btn btn-danger">Xóa</button>
                </div>
                </td>
        </tr>
            
        

        `
    }

    document.getElementById("renderProduct").innerHTML = text;
    clearForm();
}

function clearForm(){
  console.log("1111111111111111111Hiepga");
  inputProductId = document.getElementById("inputProductId").value="";
  inputProductName = document.getElementById("inputProductName").value="";
  inputProductImg = document.getElementById("inputProductImg").value="";
  inputProductPrice = document.getElementById("inputProductPrice").value = "";
  nameSearch = document.getElementById("nameSearch").value = "";
  
}
clearForm();

function adminAddProduct() {
    let products = JSON.parse(localStorage.getItem("products"));
    let inputProductName = document.getElementById("inputProductName").value;
    let inputProductId = document.getElementById("inputProductId").value;
    let inputProductImg = document.getElementById("inputProductImg").value;
    let inputProductPrice = document.getElementById("inputProductPrice").value;

    let obj = {
      id: inputProductId,
      name: inputProductName,
      image: inputProductImg,
      price: inputProductPrice,
 }
      products.push(obj);
      localStorage.setItem("products", JSON.stringify(products));
      renderProduct();
}

function btnEditUser(idItem){
  let inputProductName = document.getElementById("inputProductName").value;
  let inputProductId = document.getElementById("inputProductId").value;
  let inputProductImg = document.getElementById("inputProductImg").value;
  let inputProductPrice = document.getElementById("inputProductPrice").value;

  let products = JSON.parse(localStorage.getItem("products"));
  document.getElementById("btnProductAdmin01").innerText = "Edit";
  flag = idItem;
  let obj = {
    id: inputProductId,
    name: inputProductName,
    image: inputProductImg,
    price: inputProductPrice,
  }
  
  if(flag!=-1){
    //Tức là muốn sửa, có id rồi tìm vị trí user
    for(let i = 0; i < products.length; i++){
        console.log("11111111111111",products[i]);
        if(products[i].id == flag){
            products.splice(i,1,{...obj,id:flag});
            localStorage.setItem("products", JSON.stringify(products));
            document.getElementById("btnProductAdmin01").innerText = "Lưu lại";
            flag = -1;
            renderProduct();
            clearForm();
            return;
        }
    }
  }
}

