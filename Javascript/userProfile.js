window.addEventListener("load", () => {
    console.log(localStorage.getItem("user"));
    if (!localStorage.getItem("user")) {
      window.location.replace("../pages/login.html");
    }
  });
  
let prName = document.getElementById("name");
let prModel = document.getElementById("emailId");
let prColor = document.getElementById("genderUser");

let paraName = document.getElementById("paraName")
let paraModel = document.getElementById("paraEmail")
let paraColor = document.getElementById("paraGender")

function update(){

    let parName = prName.value;
    let parModel = prModel.value;
    let parColor = prColor.value;

        if(parName == ""){
            alert("fill the fields!!")     
            return
        }else if(parModel == ""){
            alert("please fill the empty fields!!")
            return
        }else if(parColor == ""){
            alert("please fill the empty fields!!")
            return
        }

    paraName.innerText = "Name: " + parName;
    paraModel.innerText = "Email: " + parModel;
    paraColor.innerText ="Gender: " + parColor;
  
   prName.value = ""
   prModel.value = ""
   prColor.value = ""

}

window.update = update;