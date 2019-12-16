$("form").submit(function () {
    var formData = {
        'name' : $('input[name=name]').val(),
        'mobile' : $('input[name=phone]').val(),
        'email' : $('input[name=email]').val(),
        'gender' : $('select[name=gender]').val(),
    };
    localStorage.setItem('myStorage',JSON.stringify(formData));
});