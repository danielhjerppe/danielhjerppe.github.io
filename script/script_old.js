import 'bootstrap/js/dist/collapse';

// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
document.getElementById('hide-button').addEventListener('click', function () {
    // Select the elements you want to hide
    var elementsToHide = document.querySelectorAll('.element');

    // Loop through the elements and toggle the 'hidden' class
    elementsToHide.forEach(function (element) {
        element.classList.toggle('hidden');
    });
});
$('.collapse').collapse()