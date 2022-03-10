var input = document.getElementsByTagName('input');
for (i = 0; i < 4; i++) {
    input[i].setAttribute("required", "");
}


function myfun() {
    var n = document.getElementsByTagName('span');
    for (i = 0; i < n.length; i++) {
        n[i].style.display = "none";
    }
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var mail_check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var name_check = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var checked = document.querySelectorAll('input[type="checkbox"]:checked');
  

    if (name_check.test(name)) {
       document.getElementById('ename').style.display="block";
       document.getElementById('ename').textContent="**Invalid Name";
        return false;
    } else if (name.length < 3 || name.length > 20) {
        document.getElementById('ename').style.display="block";
       document.getElementById('ename').textContent="**Invalid Name";
        return false;
    } else if (age < 18) {
        document.getElementById('eage').style.display="block";
       document.getElementById('eage').textContent="**Invalid age";
        return false;
    } else if (!mail_check.test(email)) {
        document.getElementById('eemail').style.display="block";
        document.getElementById('eemail').textContent="**Invalid email";
        return false;
    } else if (number.length < 10 || number.length > 10) {
        document.getElementById('enumber').style.display="block";
       document.getElementById('enumber').textContent="*Invalid number";
        return false;
    } else if (checked.length < 1) {
        document.getElementById('ehobby').style.display="block";
       document.getElementById('ehobby').textContent="enter your hobby";
        return false;
    } else {
        return true

    }
}