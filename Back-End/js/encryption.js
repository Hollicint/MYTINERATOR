module.exports = {
    caesarEncrypt,
    caesarDecrypt
}
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