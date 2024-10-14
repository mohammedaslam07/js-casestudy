function fistname(name, error) {
    let a = document.getElementById(name);
    let msg = document.getElementById(error);
    let b = a.value;
    let p = /^[a-zA-Z]\D{0,12}$/;
    let result = p.test(b);
    if (result) {
        msg.textContent = "success";
        msg.style.color = "green";


    }
    else {
        msg.textContent = "error";
        msg.style.color = "red";

    }

}

function email_(name, error) {
    let emailInput = document.getElementById(name);
    let errorMsg = document.getElementById(error);
    let emailValue = emailInput.value.toLowerCase();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue.length > 0) {
        if (emailPattern.test(emailValue)) {
            errorMsg.textContent = 'Success';
            errorMsg.style.color = 'green';
        } else {
            errorMsg.textContent = 'Enter a valid email format!';
            errorMsg.style.color = 'red';
        }
    } else {
        errorMsg.textContent = '';
    }
}


function mob1_(mobb, mesg) {
    let a = document.getElementById(mobb);
    let msg = document.getElementById(mesg);
    let p = /^[6789][0-9]\d{8}$/;
    let c = a.value;
    let result = p.test(c);
    if (result) {
        msg.textContent = 'Success';
        msg.style.color = 'green';
    } else {
        msg.textContent = 'error';
        msg.style.color = 'red';

    }
}

function password_(names, erros) {
    let c = document.getElementById(names);
    let mgs = document.getElementById(erros);
    let a = c.value;

    let hasLower = /[a-z]/;
    let hasUpper = /[A-Z]/;
    let hasDigit = /[0-9]/;
    let hasSpecial = /[.*#]/;

    let result1 = hasLower.test(a);
    let result2 = hasUpper.test(a);
    let result3 = hasSpecial.test(a);
    let result4 = hasDigit.test(a);


    if (result1 && result2 && result3 && result4 && a.length >= 8) {
        mgs.textContent = 'Password is good!';
        mgs.style.color = 'green';
    } else {
        mgs.textContent = 'Error: Password must include in onedigit (A,a,1,*)';
        mgs.style.color = 'red';
    }
    P_check();
}

function P_check() {
    let a = document.getElementById('password1').value;
    let b = document.getElementById('password2').value;
    let errorP = document.getElementById('error2');

    if (a.length > 0 && b.length > 0) {
        if (a !== b) {
            errorP.textContent = 'Passwords do not match!';
            errorP.style.color = 'red';
        } else {
            errorP.textContent = 'Passwords match!';
            errorP.style.color = 'green';
        }
    } else {
        errorP.textContent = '';
    }
}

//adddrees validation//
function address_(emm, message) {
    let a = document.getElementById(emm);
    let msg = document.getElementById(message);
    let b = a.value;


    let p = /^[a-zA-Z\s,.-]\D{0,50}$/;


    let result = p.test(b);

    if (result) {
        msg.textContent = "Address format is correct";
        msg.style.color = "green";
    }
    else if (result.length > 0) {
        msg.textContent = "no empty value"
        msg.style.color = "red";
    }
    else {
        msg.textContent = "Give correct format for address";
        msg.style.color = "red";
    }
}


dob.max = new Date().toISOString().split("T")[0]
date.max = new Date().toISOString().split("T")[0]