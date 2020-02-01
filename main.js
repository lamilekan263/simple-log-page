var myForm = document.forms.myForm;
var innerMessage = document.getElementById('message');
var button = document.getElementById('button');

// myForm.addEventListener(onsubmit,clicked)





// function for the form



function more(){
    // checking for the value of name
    if(myForm.email.value === ""){
        innerMessage.innerHTML = "Invalid Login Credentials";
        // button.className = "btn-danger"
        return false;
       
    }else{
        innerMessage.innerHTML = "";

        return true;
    };
    if( !myForm.password.value === "" && !myForm.password.include('@')){
        return true;
    }else{
        return false;
    }

}

// function passWord(){
//     if(myForm.password.value  === ""){
//         innerMessage.innerHTML = "Please Enter password";
//         return false;
//     }else{
//         innerMessage.innerHTML = "";
//         return true;
//     }
// }

// function clicked(){
//     more();
//     passWord();
// }
