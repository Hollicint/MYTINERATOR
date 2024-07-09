let users = [];

const loginBtn = document.getElementById('submitLoginBtn');
const regBtn = document.getElementById('submitRegBtn');

const regLink = document.getElementById('regLink');
const logLink = document.getElementById('logLink');

/*const logFrom = document.getElementById('logFrom');
const regFrom = document.getElementById('regFrom');*/

const logForm = document.getElementById('logForm');
const regForm = document.getElementById('regForm');


loginBtn.addEventListener('click', function () {
    console.log(JSON.stringify(users));

    //get values from login fields
    const emailLog = document.getElementById('emailLogin').value;
    const pWordLog = document.getElementById('pwordLogin').value;

    //check if fields are not empty
    if (emailLog.valueOf === '' || pWordLog.valueOf === '') {
        alert('Please enter both email and password');
        return;
    }

    //need to connect with database, add more validation
    //check if details are stored inside users array.
    for (let i = 0; i <= users.length; i++) {
        if (caesarDecrypt(users[i]['email']) === emailLog && caesarDecrypt(users[i]['pWord']) === pWordLog) {
            alert(`welcome ` + caesarDecrypt(users[i]['name']) + ` !`);
            return;
        } else {
            alert('Sorry, email or password is incorrect. Please try again.');
        }
    }
});


//need to connect with database, add more validation
regBtn.addEventListener('click', function () {
    //get values of registration, encrypt them.
    var name = caesarEncrypt(document.getElementById('nameReg').value);
    var email = caesarEncrypt(document.getElementById('emailReg').value)
    var pWord = caesarEncrypt(document.getElementById('pwordReg').value)

    
    //console.log(caesarEncrypt("a")) // == 97 ascii
    //console.log(caesarEncrypt("z")) // == 122 ascii

    console.log("Name Encrypted: " + name)
    console.log("Email Encrypted: " + email)
    console.log("Password Encrypted: " + pWord)


    if (name.valueOf === '' || email.valueOf === '' || pWord.valueOf === '') {
        alert('Please enter name, email and password');
        return;
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i]['email'] === email) {
            alert(`Email already in use.`);
            return;
        }
    }

    try {
        let user = { name, email, pWord };
        users.push(user);
    
        console.log("All users: " + JSON.stringify(users))
        var decryptName = caesarDecrypt(name)
        alert(`Registered, welcome ` + decryptName + ` !`);
    } catch (error) {
        console.log(error)
    }
});

function caesarEncrypt(str){
    var encrypted = "";

    for(var i = 0; i<str.length; i++){
        var asciiNum = str.charCodeAt(i);
        if(asciiNum >= 65 && asciiNum <= 90){
            encrypted += String.fromCharCode(((asciiNum - 65 + 10 )% 26) + 65);
        } else if (asciiNum >=97 && asciiNum <= 122) {
            encrypted += String.fromCharCode(((asciiNum - 97 + 10) % 26) + 97);
        } else {
            encrypted += str[i];
        }
    }
    return encrypted;
}
function caesarDecrypt(str){
    var decrypted = "";

    for(var i =0; i<str.length; i++){
        var asciiNum = str.charCodeAt(i);
        //console.log(asciiNum);
        if(asciiNum >= 65 && asciiNum <= 90){
            decrypted += String.fromCharCode(((asciiNum - 65 - 10 + 26) % 26) + 65);
        } else if (asciiNum >=97 && asciiNum <= 122) {
            decrypted += String.fromCharCode(((asciiNum - 97 - 10 + 26) % 26) + 97);
        } else {
            decrypted += str[i];
        }
    }
    return decrypted;
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