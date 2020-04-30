// $('.form').on('submit', function (event) {
//     // Remove all messages
//     $(".messages .message").remove();
//     event.preventDefault();
//     var formData = new FormData(this);
//
//     $.ajax({
//         type: "POST",
//         url: $(this).attr('action'),
//         data: formData,
//         enctype: 'multipart/form-data',
//         processData: false,
//         contentType: false,
//
//         beforeSend: function () {
//             // loader
//         },
//         success: function (result) {
//             var messages = JSON.parse(result);
//
//             if (messages["status"] == 'error') {
//                 $.each(messages, function (key, value) {
//                     if (key != null && key != 'status') {
//                         $('.messages').append('<p class="message alert alert-danger">\n' + value +
//                             '        <span class="close">X</span>\n' +
//                             '    </p>')
//                     }
//                 });
//             } else {
//                 $.each(messages, function (key, value) {
//                     if (key != null && key != 'status') {
//                         $('.messages').append('<p class="message alert alert-success">\n' + value +
//                             '        <span class="close">X</span>\n' +
//                             '    </p>')
//                     }
//                 });
//
//                 // Clear form
//                 if (typeof tinymce !== "undefined"){
//                     tinymce.editors[0].setContent("");
//                 }
//
//                 $('form').find("input[type=text],input[type=file], input[type=password], input[type=email] textarea").val("");
//             }
//             $(".messages .message").on('click', function(){
//                 $(this).remove();
//             })
//         },
//         error: function (e) {
//         }
//     });
// });