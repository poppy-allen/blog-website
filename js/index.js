$(document).ready(function () {

    $nav = $('.nav');
    $toggleMenu = $('.toggle-menu');

    $toggleMenu.click(function () {
        $nav.toggleClass('collapse');
    })
});
