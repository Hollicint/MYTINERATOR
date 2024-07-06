var users = [];

const loginBtn = document.getElementById('submitLoginBtn');
const regBtn = document.getElementById('submitRegBtn');

const regLink = document.getElementById('regLink');
const logLink = document.getElementById('logLink');

/*const logFrom = document.getElementById('logFrom');
const regFrom = document.getElementById('regFrom');*/

const logForm = document.getElementById('logForm');
const regForm = document.getElementById('regForm');


loginBtn.addEventListener('click', function () {
    console.log(users);

    //get values from login fields
    let i = 0;
    const emailLog = document.getElementById('emailLogin').value;
    const pWordLog = document.getElementById('pwordLogin').value;

    //check if fields are not empty
    if (emailLog.value === '' || pWordLog.value === '') {
        alert('Please enter both email and password');
        return;
    }

    //need to connect with database, add more validation
    //check if details are stored inside users array.
    for (let i = 0; i < users.length; i++) {
        if (users[i]['email'] === emailLog && users[i]['pWord'] === pWordLog) {
            alert(`welcome ` + users[i]['name'] + ` !`);
            return;
        }
    }
    alert('Sorry, email or password is incorrect. Please try again.');
});


//need to connect with database, add more validation
regBtn.addEventListener('click', function () {

    let i = 0;
    var name = document.getElementById('nameReg').value;
    var email = document.getElementById('emailReg').value;
    var pWord = document.getElementById('pwordReg').value;
    let encyryptedName =  caesarCipher(name);
    let encyryptedEmail = caesarCipher(email);
    let encyryptedPWord = caesarCipher(pWord);
    console.log(caesarCipher("A"))
    console.log("Name Encrypted: " + encyryptedName)
    console.log("Email Encrypted: " + encyryptedEmail)
    console.log("Password Encrypted: " + encyryptedPWord)



    if (name === '' || email.value === '' || pWord.value === '') {
        alert('Please enter name, email and password');
        return;
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i]['email'] === email) {
            alert(`Email already in use.`);
            return;
        }
    }

    const user = { name, email, pWord };
    users.push(user);
    console.log(users)
    alert(`Registered, welcome ` + users[i]['name'] + ` !`);
});

function caesarCipher(str){
    var encrypted = "";

    for(var i =0; i<=str.length; i++){
        var asciiNum = str[i].charCodeAt();
        console.log(asciiNum);
        if(asciiNum >= 65 && asciiNum <= 112){
            encrypted += String.fromCharCode(asciiNum + 10)
        } else if (asciiNum >=113 && asciiNum <= 90) {
            encrypted += String.fromCharCode(asciiNum - 10)
        } else {
            encrypted += str[i];
        }
    }
    return encrypted;

}

/*
logLink.addEventListener('click', function(){
  logForm.style.display = 'inline';
  regForm.style.display = 'none';
});

regLink.addEventListener('click', function(){
  logForm.style.display = 'none';
  regForm.style.display = 'inline';
});*/

document.addEventListener('DOMContentLoaded', function() {
    var logLink = document.getElementById('logLink');
    var regLink = document.getElementById('regLink');
    var logForm = document.getElementById('logForm');
    var regForm = document.getElementById('regForm');

    logLink.addEventListener('click', function(event) {
        event.preventDefault();
        logForm.style.display = 'block';
        regForm.style.display = 'none';
    });

    regLink.addEventListener('click', function(event) {
        event.preventDefault();
        logForm.style.display = 'none';
        regForm.style.display = 'block';
    });

    
    logForm.style.display = 'block';
    regForm.style.display = 'none';
});