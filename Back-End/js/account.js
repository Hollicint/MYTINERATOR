document.addEventListener('DOMContentLoaded', function() {
        const imgInput = document.querySelector('.img');
        const uploadima = document.getElementById('uploadima');
    
        imgInput.addEventListener("change", function() {
            if (imgInput.files.length > 0) {
                uploadima.submit();
            }
        });
    });









  //  const imgInput = document.getElementById('img');
  //  const uploadima = document.getElementById('uploadima');
  //  
  //  
  //  
  //  imgInput.addEventListener("change", function()
  //      {
  //          if(imgInput.files.length >0)
  //          {
  //              uploadima.submit();
  //          }
  //  
  //      });






//const { response } = require("express");
//
//document.getElementById('uploadima').addEventListener('submit', function(event)
//{
//    event.preventDefault();
//    let formImg = new FormImg();
//    formImg.append('img', document.getElementById('img').files[0]);
//    fetch('/uploadima',{ method:'POST', body: formImg})
//    .then(response => response.json())
//    .then(data => {
//        if(data.success)
//         {
//            alert('Image has been sent');
//            sendEmailWithAttachment(data.filePath);
//         }
//         else
//         {
//            alert('Image hasnt sent' +data.message);
//         }
//    })
//    .catch(error =>{console.error('Error:',error);
//          alert('Image upload failed');
//    });
//});
























//var users = [];
//
//const loginBtn = document.getElementById('submitLoginBtn');
//const regBtn = document.getElementById('submitRegBtn');
//
//const regLink = document.getElementById('regLink');
//const logLink = document.getElementById('logLink');
//
//const logFrom = document.getElementById('logFrom');
//const regFrom = document.getElementById('regFrom');
//
//
//loginBtn.addEventListener('click', function(){
//    console.log(users);
//
//    //get values from login fields
//    let i = 0;
//    const emailLog = document.getElementById('emailLogin').value;
//    const pWordLog = document.getElementById('pwordLogin').value;
//    
//    //check if fields are not empty
//    if (emailLog.value === '' || pWordLog.value === '') {
//    alert('Please enter both email and password');
//    return;
//    }
//  
//    //need to connect with database, add more validation
//    //check if details are stored inside users array.
//    for(let i=0; i<users.length; i++){
//        if (users[i]['email'] === emailLog && users[i]['pWord'] === pWordLog){
//            alert(`welcome ` + users[i]['name'] + ` !`);
//            return;
//        }
//    }
//    alert('Sorry, email or password is incorrect. Please try again.');
//});
//
//
////need to connect with database, add more validation
//regBtn.addEventListener('click', function(){
//
//    let i = 0;
//    var name = document.getElementById('nameReg').value;
//    var email = document.getElementById('emailReg').value;
//    var pWord = document.getElementById('pwordReg').value;
//  
//    if (name === '' || email.value === ''|| pWord.value === '') {
//        alert('Please enter name, email and password');
//        return;
//    }
// 
//    for(let i=0; i<users.length; i++){
//        if (users[i]['email'] === email){
//        alert(`Email already in use.`);
//        return;
//        }    
//    }
//
//    const user = {name, email, pWord};
//    users.push(user);
//    console.log(users)
//    alert(`Registered, welcome ` + users[i]['name'] + ` !`);
//});
//
//
//logLink.addEventListener('click', function(){
//  logForm.style.display = 'inline';
//  regForm.style.display = 'none';
//});
//
//regLink.addEventListener('click', function(){
//  logForm.style.display = 'none';
//  regForm.style.display = 'inline';
//})