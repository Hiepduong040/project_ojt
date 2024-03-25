  let searchForm = document.querySelector(".search-form");
  document.querySelector("#search-btn").onclick = () =>
  {
    searchForm.classList.toggle("active");
  };
  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 10,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 10,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
   // let products = [
      
    //   {
    //     image:"./assets/images/product-1.png",
    //     name:"Cam",
    //     price:20,
    //     id:1,
    //     stock:20,
    //     totalPrice: 0,
    //   },

    //   {
    //     image:"./assets/images/product-2.png",
    //     name:"Hành khô",
    //     price:55,
    //     id:2,
    //     stock:30,
    //     totalPrice: 0,
    //   },

    //   {
    //     image:"./assets/images/product-3.png",
    //     name:"Thịt tươi",
    //     price:80,
    //     id:3,
    //     stock:10,
    //     totalPrice: 0,
    //   },

    //   {
    //     image:"./assets/images/product-4.png",
    //     name:"Cải bắp",
    //     price:40,
    //     id:4,
    //     stock:50,
    //     totalPrice: 0,
    //   },

    //   {
    //     image:"./assets/images/product-5.png",
    //     name:"Khoai tây",
    //     price:50,
    //     id:5,
    //     stock:47,
    //     totalPrice: 0,
    //   },

    //   {
    //     image:"./assets/images/product-6.png",
    //     name:"Bơ",
    //     price:60,
    //     id:6,
    //     stock:4,
    //     totalPrice: 0,
    //   },
    // ]

     // localStorage.setItem("products",JSON.stringify(products));
    let products = JSON.parse(localStorage.getItem("products"));
    
    function renderProduct() {
      let element=""
      for(let i = 0 ; i< products.length; i++){
        element += `
                    
        <a href="./pages/detailProduct.html"><div class="swiper-slide box">
        <img src="${products[i].image}" alt="" />
        <h1>${products[i].name}</h1>
        <div class="price">${products[i].price}.000 VNĐ</div>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half"></i>
        </div>
        <a class="btn" onclick="addToCart(${products[i].id})">thêm vào giỏ</a>
      </div></a>
        `
      }
      
      document.getElementById("products-section").innerHTML = element;
    }
    renderProduct();
    // let feedbacks = [   
    //   {
    //     image:"./assets/images/pic-1.png",
    //     feedback:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit, a? Iure eum aspernatur exercitationem possimus.",
    //     name:"John Son"
    //   },
      
    //   {
    //     image:"./assets/images/pic-2.png",
    //     feedback:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit, a? Iure eum aspernatur exercitationem possimus.",
    //     name:"Lora"
    //   },
      
    //   {
    //     image:"./assets/images/pic-3.png",
    //     feedback:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit, a? Iure eum aspernatur exercitationem possimus.",
    //     name:"Sam"
    //   },
      
    //   {
    //     image:"./assets/images/pic-4.png",
    //     feedback:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit, a? Iure eum aspernatur exercitationem possimus.",
    //     name:"Sally"
    //   },

    // ]

    // localStorage.setItem("feedbacks",JSON.stringify(feedbacks));
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks"));
    function renderFeedback(){
      let element="";
      for(let j = 0; j < feedbacks.length; j++){
        element += `
        <div class="swiper-slide box" >
            <img src="${feedbacks[j].image}" alt="" />
            <p>
              ${feedbacks[j].feedback}
            </p>
            <h3>${feedbacks[j].name}</h3>
            <div class="stars">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half"></i>
            </div>
          </div>
        `
      }
     
      document.getElementById("feedback-customer").innerHTML = element;
    }
    renderFeedback();
    // let categories = [
    //   {
    //     image:"./assets/images/cat-1.jpg",
    //     name:"Rau củ",
    //     sale:"Giảm giá 40%",
    //   },
    //   {
    //     image:"./assets/images/cat-2.jpg",
    //     name:"Trái cây tươi",
    //     sale:"Giảm giá 50%",
    //   },
    //   {
    //     image:"./assets/images/cat-3.jpg",
    //     name:"Thức ăn giảm cân",
    //     sale:"Giảm giá 60%",
    //   },
    //   {
    //     image:"./assets/images/cat-4.jpg",
    //     name:"Thịt tươi",
    //     sale:"Giảm giá 30%",
    //   },
    // ]

    // localStorage.setItem("categories",JSON.stringify(categories));

    let categories = JSON.parse(localStorage.getItem("categories"));
    function renderCategories(){
      let element="";
      for(let k = 0; k < categories.length ; k++){
        element += `
        <div class="box">
          <img src="${categories[k].image}" alt="" />
          <h3>${categories[k].name}</h3>
          <p>${categories[k].sale}</p>
          <a href="" class="btn">Mua ngay</a>
        </div>
        `
      }
      document.getElementById("box-container-categories").innerHTML = element;
    }
    renderCategories();

    function nameLogin(){     
      let nameUserCurrent = JSON.parse(localStorage.getItem("name-user-current"));
      if(nameUserCurrent==null){
        console.log("Bạn chưa đăng nhập");
        return;
      }else{
      document.getElementById("btn-current-login").innerText = nameUserCurrent;
      }
    }
    nameLogin();
    function addToCart(productId) {
      let checkLogin = JSON.parse(localStorage.getItem("check-login"));
      let users = JSON.parse(localStorage.getItem("users")) ;
      if(checkLogin==null){
        console.log("bạn phải đăng nhập để mua hàng");
        return;
      }
      console.log("đi mua bthg");
      for(let i = 0 ; i < users.length ; i++){
        if(checkLogin == users[i].userId){
          let product = JSON.parse(localStorage.getItem("products"));
          for (let j = 0; j < product.length; j++) {
              if (productId == product[j].id) {
                  let index = users[i].cart.findIndex((item,index)=>{
                    return item.id == productId;
                  })
                  if(index == -1){
                    console.log("chưa có");
                    users[i].cart.push({...product[j], quantity: 1 });
                    localStorage.setItem("users", JSON.stringify(users));
                    showQuantityCart()
                  }else{
                    //có
                    console.log("đã có");
                    users[i].cart[index].quantity += 1;
                    localStorage.setItem("users", JSON.stringify(users));
                    showQuantityCart()
                  }
              }
          }
        }
      };
    };
  function showQuantityCart(){
    let checkLogin = JSON.parse(localStorage.getItem("check-login"));
    let users = JSON.parse(localStorage.getItem("users"));
    for(let i = 0 ; i < users.length ; i++){
      if(users[i].userId == checkLogin){
        document.getElementsByClassName("itemInCart")[0].innerText = users[i].cart.length;
      }
      
    }
  }
  showQuantityCart();


    

































    