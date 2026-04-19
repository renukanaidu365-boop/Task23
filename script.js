// Mobile menu toggle
let btn = document.getElementById('menuBtn');
let menu = document.getElementById('mobileMenu');

btn.onclick = function() {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        btn.innerHTML = '☰';
    } else {
        menu.classList.add('open');
        btn.innerHTML = '✕';
    }
};

// Chat button
let chat = document.getElementById('chatBtn');
chat.onclick = function() {
    alert('Welcome to AppName! How can we help?');
};