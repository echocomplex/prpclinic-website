document.getElementById('logo').addEventListener('click', function() {
        window.location.href = '../index.html';
});

document.getElementById('note').addEventListener('click', function() {
        window.location.href = '../index.html';
});

$(document).ready(function() {
        $('#phone').inputmask({
            mask: '+7 (999) 999-99-99',
            placeholder: '+7 (___) ___-__-__',
            showMaskOnHover: true,
            showMaskOnFocus: true
        });
});
  