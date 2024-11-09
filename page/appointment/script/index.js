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
        $('#phone').on('input', function() {
                var isComplete = $(this).inputmask('isComplete');
                var name = $('#name').val().trim();
                if (isComplete && name.length > 0) {
                        $('#startAppointment').prop('disabled', false);
                } 
                else {
                        $('#startAppointment').prop('disabled', true);
                }
        });
        $('#name').on('input', function() {
                var name = $(this).val().trim();
                var isComplete = $('#phone').inputmask('isComplete');
        
                if (isComplete && name.length > 0) {
                        $('#startAppointment').prop('disabled', false);
                } 
                else {
                        $('#startAppointment').prop('disabled', true);
                }
        });
        $('#startAppointment').prop('disabled', true);
});

function generateLink() {
        window.location.href = '../index.html';
}
  