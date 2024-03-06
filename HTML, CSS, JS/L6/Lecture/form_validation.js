let buttons = document.getElementsByTagName('button');
let submitButton = buttons[0];
let flag = new Array(3).fill(false);
console.log(flag);

function validateName(e){
    let name = e.target.value;
    console.log(name);
    if(name.length>3){
        flag[0] = true;
    }
    else{
        flag[0] = false;
    }
    checkSum();
}

function validatePhone(e){
    let phone = e.target.value;
    console.log(phone);
    if(phone.length==10){
        flag[1] = true;
    }
    else{
        flag[1] = false;
    }
    checkSum();
}

function validatePassword(e){
    let pass = e.target.value;
    console.log(pass);
    if(pass.length>=8){
        flag[2] = true;
    }
    else{
        flag[2] = false;
    }
    checkSum();
}

function checkSum(){
    console.log(flag);
    let globalFlag = true;
    for(let i=0; i<3; i++){
        if(flag[i]===false){
            globalFlag = false;
        }
    }

    submitButton.disabled = !globalFlag;

}
