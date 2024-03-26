  function renderDetailProduct() {
    let checkIdDetailProduct = JSON.parse(localStorage.getItem("checkIdDetailProduct"));
    let products = JSON.parse(localStorage.getItem("products"));
    let element = "";
    for (let i = 0; i < products.length; i++) {
    
        if (products[i].id == checkIdDetailProduct) {
            if(products[i].image.includes("data:image")||products[i].image.includes("http")){
              element = `
              <div class="productImage">
              <img
                src="${products[i].image}"
                alt=""
              />
              </div>
              <div class="producInfo" id="producInfo">
                <h2>${products[i].name}</h2>
                <p class="price">Giá:${products[i].price}.000 VND</p>
                <p class="description">
                ${products[i].description}
                </p>
               
                <form id="productForm">
                    <label for="quantity">Số lượng:</label>
                    <input
                      type="number"
                      id="quantityProduct"
                      name="quantity"
                      min="1"
                      value="1"
                    />
                    <a href="../pages/cart.html">
                    <button>Thêm vào giỏ hàng</button>
                    </a>
                     
                    
                
                </form>
               </div>
              `;
              break; // Sau khi tìm thấy sản phẩm, thoát khỏi vòng lặp
            }else{
            element = `
              <div class="productImage">
              <img
                src=".${products[i].image}"
                alt=""
              />
              </div>
              <div class="producInfo" id="producInfo">
                <h2>${products[i].name}</h2>
                <p class="price">Giá:${products[i].price}.000 VND</p>
                <p class="description">
                ${products[i].description}
                </p>
                <form id="productForm">
                <label for="quantity">Số lượng:</label>
                <input
                  type="number"
                  id="quantityProduct"
                  name="quantity"
                  min="1"
                  value="1"
                />
                <a href="../pages/cart.html">
                    <button >Thêm vào giỏ hàng</button>
                    </a>
                
                </form>
               </div>
              `;
            break; // Sau khi tìm thấy sản phẩm, thoát khỏi vòng lặp
            }
        }
    }
    
    document.getElementById("productDetail").innerHTML = element;
}

renderDetailProduct();
