
const form = document.querySelector("#form");
const lengthInput = form.querySelector("#lengthInput");
const numericCheckbox = form.querySelector("#numericCheckbox");
const uppercaseCheckbox = form.querySelector("#uppercaseCheckbox");
const lowercaseCheckbox = form.querySelector("#lowercaseCheckbox");
const resultInput = form.querySelector("#resultInput");


function generateRandomString(length, includeNumeric, includeUppercase, includeLowercase) {
    let charset = '';
    if (includeNumeric) charset += '0123456789';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    
    let result = '';
    for (let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const length = parseInt(lengthInput.value);
    const includeNumeric = numericCheckbox.checked;
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    
    
    const randomString = generateRandomString(length, includeNumeric, includeUppercase, includeLowercase);
    resultInput.value = randomString;
});
