function toggleMenu(el) {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    el.classList.toggle("open");
}

const priceone = document.getElementById('price-one');

priceone.innerHTML = "<h4 style='font-size: 0.6rem'>PHP</h4> 120.00";

const pricetwo = document.getElementById('price-two');
pricetwo.innerHTML = "<h4 style='font-size: 0.6rem'>PHP</h4> 150.00";

const map = document.getElementById('map');

map.innerHTML = `<iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405.4702343700065!2d120.91640052301905!3d13.851877219171293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd09da33c59835%3A0xa7f6a78ce0226878!2sCasa%20Gatchalian!5e1!3m2!1sen!2sph!4v1773829118700!5m2!1sen!2sph"
width = "600" height = "450" style = "border:0;" allowfullscreen = "" loading = "lazy"
referrerpolicy = "no-referrer-when-downgrade"></iframe > '`;