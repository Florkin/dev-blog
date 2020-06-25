$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");

    if ($("#wrapper").hasClass("toggled")){
        $("#menu-toggle").text('fermer')
    } else {
        $("#menu-toggle").text('Menu')

    }
});