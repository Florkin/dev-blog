$('.form').on('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this)

    $.ajax({
        type: "POST",
        url: $(this).attr('action'),
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,

        beforeSend: function () {
            // loader
        },
        success: function (result) {
            var messages = JSON.parse(result);

            if (messages["status"] == 'error') {
                $.each(messages, function (key, value) {
                    if (key != null && key != 'status') {
                        $('.messages').append('<p class="message alert alert-danger">\n' + value +
                            '        <span class="close">X</span>\n' +
                            '    </p>')
                    }
                });
            } else {
                $.each(messages, function (key, value) {
                    if (key != null && key != 'status') {
                        $('.messages').append('<p class="message alert alert-success">\n' + value +
                            '        <span class="close">X</span>\n' +
                            '    </p>')
                    }
                });
                tinymce.editors[0].setContent("");
                $('form').find("input[type=text],input[type=file], textarea").val("");
            }
            $(".messages .message").on('click', function(){
                $(this).remove();
            })
        },
        error: function (e) {
        }
    });
});