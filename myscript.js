function searchPhotos() {
    var input, filter, gallery, items, a, i, keywords;
    input = document.getElementById('searchInput');
    filter = input.value.toLowerCase();
    gallery = document.getElementById('gallery');
    items = gallery.getElementsByClassName('photo-item');

    for (i = 0; i < items.length; i++) {
        a = items[i];
        keywords = a.getAttribute('data-keywords');
        if (keywords.toLowerCase().indexOf(filter) > -1) {
            a.style.display = "";
        } else {
            a.style.display = "none";
        }
    }
}

let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

const correctPasscode = 'yygs'; // Replace with your actual passcode

function checkPasscode() {
    const inputPasscode = document.getElementById('passcode').value;
    if (inputPasscode === correctPasscode) {
        document.getElementById('restricted-photos').style.display = 'block';
        document.getElementById('passcode-section').style.display = 'none';
    } else {
        alert('Incorrect passcode. Please try again.');
    }
}