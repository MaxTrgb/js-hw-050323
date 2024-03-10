$(document).ready(function() {
    $('#form').submit(function(event) {
        event.preventDefault(); 
        const length = parseInt($('#lengthInput').val());
        const includeNumeric = $('#numericCheckbox').prop('checked');
        const includeUppercase = $('#uppercaseCheckbox').prop('checked');
        const includeLowercase = $('#lowercaseCheckbox').prop('checked');

        let charset = '';
        if (includeNumeric) charset += '0123456789';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';

        let result = '';
        for (let i = 0; i < length; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        $('#resultInput').val(result);
    });
});