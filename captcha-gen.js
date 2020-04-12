function GenerateCaptcha() {  
    var chr1 = Math.ceil(Math.random() * 10) + '';  
    var chr2 = Math.ceil(Math.random() * 10) + '';  
    var chr3 = Math.ceil(Math.random() * 10) + '';  

    var str = new Array(4).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });  
    var captchaCode = str + chr1 + ' ' + chr2 + ' ' + chr3;  
    document.getElementById("captcha").value = captchaCode  
}  

/* Validating Captcha Function */  
function ValidCaptcha() {  
    var str1 = removeSpaces(document.getElementById('captcha').value);  
    var str2 = removeSpaces(document.getElementById('captchaompare').value);  

    if (str1 == str2) return true;  
    return false;  
}  

/* Remove spaces from Captcha Code */  
function removeSpaces(string) {  
    return string.split(' ').join('');  
}  