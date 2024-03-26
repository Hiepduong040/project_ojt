
function renderUser(){    
    let users = JSON.parse(localStorage.getItem("users")); 
    let element = "";
    for(let i = 0 ; i < users.length ; i++){
        element += `
        <tr>
              <th scope="row">${i+1}</th>
              <td>${users[i].userId}</td>
              <td>${users[i].userName}</td>
              <td>${users[i].email}</td>
              <td>${users[i].address}</td>
              <td id="statusUser">${users[i].status} </td>
              <td>
                <div class="buttonActive">
                  <button type="button" class="btn btn-success">Mở</button
                  ><button type="button" class="btn btn-danger" onclick="banUser(${users[i].userId})" >Chặn</button>
                </div>
              </td>
            </tr>
            `
    }
    document.getElementById("tbodyMainRender").innerHTML = element;
}

renderUser();

function banUser(idUser){
    let users = JSON.parse(localStorage.getItem("users"));
    for(let i = 0 ; i < users.length ; i++){
        if(users[i].status == "true" ){
          users[i].status == "false";
          document.getElementById("statusUser").innerText = "false";
        }
    } 
    console.log("kkkkkkkkkkkkk");
    localStorage.setItem("users",JSON.stringify(users));
}