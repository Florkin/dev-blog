$('.js-confirm-delete').on('click', function(){
    var action = $(this).attr('data-href');
    $('#confirm-delete .btn-ok').attr({
        href:action
    })
})