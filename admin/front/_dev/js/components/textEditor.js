$(document).ready(function () {
    if ($('textarea#tinymce').length) {
        tinymce.init({
            encoding: 'xml',
            selector: "textarea#tinymce",
            language: 'fr',
            height: 300,
            menubar: false,
            statusbar: false,
            plugins: 'code image table link media codesample',
            toolbar: 'undo redo styleselect bold italic alignleft aligncenter alignright bullist numlist outdent indent format code image table link imagetools media codesample',
            setup: function (editor) {
                editor.on('change', function () {
                    tinymce.triggerSave();
                });
            }
        });
    };
});