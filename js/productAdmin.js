let flag;
let statusForm = "add";

document.getElementById('formSubmit').addEventListener('submit', function (e){
  e.preventDefault();
  let products = JSON.parse(localStorage.getItem("products"));
  let inputProductName = document.getElementById("inputProductName").value;
  // let inputProductId = document.getElementById("inputProductId").value;
  let inputProductImg = document.getElementById("inputProductImg").value;
  let inputProductPrice = document.getElementById("inputProductPrice").value;
  let inputProductDescription = document.getElementById("inputProductDescription").value;
  let nameError = document.getElementById("nameError");
  let idError = document.getElementById("idError");
  let imgError = document.getElementById("imgError");
  let priceError = document.getElementById("priceError");

  

  console.log("999999999",flag);
  for(let i = 0; i < products.length; i++){
    console.log(statusForm);
    if(inputProductName== products[i].name && statusForm == "add"){
      document.getElementById("nameError").innerText = "Tên sản phẩm không được trùng";
      nameError.style.display = "block"
      return;
    }else{
      nameError.style.display = "none"
      document.getElementById("nameError").innerText = "Tên sản phẩm không được để trống";
    };
    // if(inputProductId== products[i].id && statusForm == "add"){
    //   document.getElementById("idError").innerText = "Id sản phẩm không được trùng";
    //   idError.style.display = "block"
    //   return;
    // }else{
    //     idError.style.display = "none"
    //     document.getElementById("idError").innerText = "Id sản phẩm không được để trống";
    // };
    if(inputProductImg == products[i].image && statusForm == "add"){
      document.getElementById("imgError").innerText = "Ảnh sản phẩm không được trùng";
      imgError.style.display = "block"
      return;
    }else{
        imgError.style.display = "none"
        document.getElementById("imgError").innerText = "Ảnh sản phẩm không đúng định dạng";
    };
    if(inputProductPrice <= 0){
      document.getElementById("priceError").innerText = "Giá sản phẩm không được nhỏ hơn 0";
      priceError.style.display = "block"
      return;
    }else{
        priceError.style.display = "none"
        document.getElementById("priceError").innerText = "Giá sản phẩm không được để trống";
    }
  }
  if(!inputProductName){
      nameError.style.display = "block"
      return;
  }else{
      nameError.style.display = "none"
  }
  // if(!inputProductId){
  //     idError.style.display = "block"
  //     return;
  // }else{
  //     idError.style.display = "none"
  // }
  if(!inputProductImg){
      imgError.style.display = "block"
      return;
  }else{
      imgError.style.display = "none"
  }
  if(!inputProductPrice){
      priceError.style.display = "block"
      return;
  }else{
      priceError.style.display = "none"
  }
  // document.getElementById("inputProductId").readOnly = false;
  let obj = {
    id: Math.ceil(Math.random()*10000000 ),
    name: inputProductName,
    image: inputProductImg,
    price: inputProductPrice,
    description: inputProductDescription,
  };
  if(flag!=-1){
      for(let i = 0; i < products.length; i++){
          console.log("2222222222222222",products[i]);
          if(products[i].id == flag){
            console.log("222222222222222222",products[i]);
              products.splice(i,1,{...obj,id:flag});
              document.getElementById("btnProductAdmin01").innerText = "Lưu lại";
              localStorage.setItem("products", JSON.stringify(products));
              flag = -1;
              renderProduct();
              clearForm();
              return;
          }
      }
    }
  statusForm = "add";
  products.push(obj);
  
  localStorage.setItem("products", JSON.stringify(products));
  renderProduct();
  clearForm();
});

function btnEditUser(idItem){
  let products = JSON.parse(localStorage.getItem("products"))
  console.log("111111",idItem);
  // document.getElementById('inputProductId').value = idItem;
  statusForm = "edit";
  document.getElementById("btnProductAdmin01").innerText = "Edit";
  flag = idItem;
  
  // document.getElementById("inputProductId").readOnly = true;
}
function renderProduct() {
    let products = JSON.parse(localStorage.getItem("products"));
    
    let element=""
  
    for(let i = 0 ; i< products.length; i++){
      if(products[i].image.includes("data:image")||products[i].image.includes("http")){
        element += `
        <tr >
            <th scope="row">${i+1}</th>
            <td>${products[i].id}</td>
            <td>${products[i].name}</td>
            <td>
                <img
                style="width: 50px; height: 50px"
                src="${products[i].image}"
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
      }else{
        element +=
        `
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
    }      
    document.getElementById("renderProduct").innerHTML = element;
  }
  renderProduct();

  function deleteProduct(idItem){
    let products = JSON.parse(localStorage.getItem("products"));
    let users = JSON.parse(localStorage.getItem("users"));
    for(let i = 0; i <products.length ; i++){
      if(idItem == products[i].id ){
        products.splice(i,1);
      }
    }
    localStorage.setItem("products", JSON.stringify(products));
    renderProduct();
  }
  
  function searchUser(){
    let products = JSON.parse(localStorage.getItem("products"));
    let userProduct = document.getElementById("inputProductName").value;
    // let idProduct = document.getElementById("inputProductId").value;
    let searchUserName = document.getElementById("nameSearch").value;
    let searchUserId = document.getElementById("nameSearch").value;
    let data = [];
    for(let i = 0; i <products.length; i++){
        if(products[i].name.toUpperCase().includes(searchUserName.toUpperCase()) ==true  ){
            data.push(products[i]);

        }
    }
    for(let i = 0; i <products.length; i++){
        if( products[i].id == searchUserId ){
            data.push(products[i]);

        }
    }
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
  // inputProductId = document.getElementById("inputProductId").value="";
  inputProductName = document.getElementById("inputProductName").value="";
  inputProductImg = document.getElementById("inputProductImg").value="";
  inputProductPrice = document.getElementById("inputProductPrice").value = "";
  nameSearch = document.getElementById("nameSearch").value = "";
  inputProductDescription = document.getElementById("inputProductDescription").value = "";
  // inputProductId.readOnly = false;
  // idError.style.display = "none";
}
clearForm();







