document.addEventListener('DOMContentLoaded', function() {

const loginBtn = document.getElementById('submitLoginBtn');
const regBtn = document.getElementById('submitRegBtn');

const regLink = document.getElementById('regLink');
const logLink = document.getElementById('logLink');

const logForm = document.getElementById('logForm');
const regForm = document.getElementById('regForm');


loginBtn.addEventListener('click', function () {

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

    users.forEach((user) => {
        if (caesarDecrypt(user.email) === emailLog && caesarDecrypt(user.pWord) === pWordLog) {
            alert(`welcome ` + caesarDecrypt(users[i][name]) + ` !`);
            return;
        } else {
            alert('Sorry, email or password is incorrect. Please try again.');
        }
    })
});
//need to connect with database, add more validation
regBtn.addEventListener('click', async function () {

    const backEndPoint = `/register`;
    const ContactNum = ' ';
    const DreamTrip = ' ';

    //get values of registration, encrypt them.
    var name = caesarEncrypt(document.getElementById('nameReg').value);
    var email = caesarEncrypt(document.getElementById('emailReg').value);
    var pWord = caesarEncrypt(document.getElementById('pwordReg').value);
    var DOB = document.getElementById('DOBReg').value;


    if (name === '' || email === '' || pWord === '' || DOB === '') {
        alert('Please enter name, email and password');
        return;
    }
 
    //send Register details to backend, check if exists, add to MongoDB.
    try {
      const response = await fetch(backEndPoint, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Name: name, Email: email, Password: pWord, DateOfBirth: DOB, ContactNum: ContactNum, DreamTrip: DreamTrip
        }),
      });
      
       if (!response.ok) {
        const error = await response.text();
        alert(error);
      } else {
        const responseText = await response.text();
        alert(responseText + caesarDecrypt(name));
      }
    } catch (error) {
      console.log(error);
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
