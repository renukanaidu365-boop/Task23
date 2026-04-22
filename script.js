// Task 23 - AppName Landing Page
// I wrote this with error handling and console logs

console.log('JavaScript loaded - Task 23 started');

// ========== MOBILE MENU TOGGLE ==========
let menuBtn = document.getElementById('menuBtn');
let mobileMenu = document.getElementById('mobileMenu');

// Check if elements exist (error handling)
if (menuBtn && mobileMenu) {
    console.log('Menu button and mobile menu found');
    
    menuBtn.onclick = function() {
        console.log('Menu button clicked');
        
        // Toggle the 'hidden' class
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            menuBtn.innerHTML = '✕';
            console.log('Menu opened');
        } else {
            mobileMenu.classList.add('hidden');
            menuBtn.innerHTML = '☰';
            console.log('Menu closed');
        }
    };
} else {
    console.error('Could not find menu button or mobile menu');
}

// ========== CLOSE MENU WHEN LINK CLICKED ==========
// This makes user experience better - menu closes automatically
let menuLinks = document.querySelectorAll('#mobileMenu a');

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = function() {
        mobileMenu.classList.add('hidden');
        menuBtn.innerHTML = '☰';
        console.log('Link clicked - menu closed');
    };
}

// ========== CHAT BUTTON WITH TIME-BASED MESSAGES ==========
let chatBtn = document.getElementById('chatBtn');

if (chatBtn) {
    console.log('Chat button found');
    
    chatBtn.onclick = function() {
        console.log('Chat button clicked');
        
        // Get current hour
        let hour = new Date().getHours();
        let message;
        
        // Different messages based on time of day
        if (hour < 12) {
            message = '🌅 Good morning! Ready to build amazing products?';
        } else if (hour < 18) {
            message = '☀️ Good afternoon! Want to start your free trial?';
        } else {
            message = '🌙 Good evening! Need help with AppName?';
        }
        
        alert(message);
    };
} else {
    console.error('Could not find chat button');
}

// ========== RESPONSIVE DEBUGGING ==========
// Logs window size when resized (helps debug responsive issues)
window.onresize = function() {
    let width = window.innerWidth;
    console.log('Window width: ' + width + 'px');
    
    if (width < 640) {
        console.log('  → Mobile view (small)');
    } else if (width < 768) {
        console.log('  → Tablet view');
    } else if (width < 1024) {
        console.log('  → Desktop view (medium)');
    } else {
        console.log('  → Desktop view (large)');
    }
};

// Log initial window size
console.log('Initial window width: ' + window.innerWidth + 'px');