// Mobile menu toggle
let btn = document.getElementById('menuBtn');
let menu = document.getElementById('mobileMenu');

btn.onclick = function() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        btn.innerHTML = '✕';
    } else {
        menu.classList.add('hidden');
        btn.innerHTML = '☰';
    }
};

// Chat button
let chat = document.getElementById('chatBtn');
chat.onclick = function() {
    alert('Hello! How can I help?');
};