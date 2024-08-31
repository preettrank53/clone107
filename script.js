// JavaScript code

// Back to top functionality
const backToTopButton = document.querySelector('.foot-p1');
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add to cart count
let cartCount = 0;
const cartIcon = document.querySelector('.nav-cart');
if (cartIcon) {
    cartIcon.addEventListener('click', () => {
        cartCount++;
        alert(`You have ${cartCount} item(s) in your cart.`);
    });
}

// Box zoom on hover
const boxes = document.querySelectorAll('.box');
if (boxes.length > 0) {
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05)';
            box.style.transition = 'transform 0.3s ease';
        });
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)';
        });
    });
}

// Redirect to amazon.in on click
const redirectLink = document.querySelector('.hero-msg a');
if (redirectLink) {
    redirectLink.addEventListener('click', () => {
        window.location.href = 'https://www.amazon.in';
    });
}

