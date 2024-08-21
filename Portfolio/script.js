


// const ctaBox = document.getElementById('ctaBox');
// const ctaButton = document.querySelector('.cta-button');

// ctaButton.addEventListener('mouseenter', function() {
//     this.style.transform = 'scale(1.1)';
//     if (this.textContent === 'Hide') {
//         this.style.transform = 'scale(0.9)';
//     }
// });

// ctaButton.addEventListener('mouseleave', function() {
//     this.style.transform = 'scale(1)';
//     if (this.textContent === 'Hide') {
//         this.style.transform = 'scale(1)';
//     }
// });

// ctaButton.addEventListener('click', function() {
//     event.preventDefault();
//     if (ctaBox.style.display === 'none' || ctaBox.style.display === '') {
//         ctaBox.style.display = 'block';
//     } else {
//         ctaBox.style.display = 'none';
//     }
//     // Toggle button size
//     if (this.classList.contains('clicked')) {
//         this.style.transform = 'scale(1.1)';
//         this.textContent = 'About Me';
        
    
//     } else {
//         this.style.transform = 'scale(0.9)';
//         this.textContent = 'Hide';
//     }

//     // Toggle clicked state
//     this.classList.toggle('clicked');
// });
    
document.addEventListener('DOMContentLoaded', () => {
    const portfolioButton = document.getElementById('portfolioButton');
    const titleElement = document.querySelector('.title');
    const divideBottom = document.querySelector('.divide-bottom');
    const divideTop = document.querySelector('.divide-top');
    const contentWrapper = document.querySelector('.content-wrapper');
    const hero = document.querySelector('.hero');
    const nav = document.querySelector('.nav');
    
    portfolioButton.addEventListener('click', () => {
        titleElement.style.maxWidth = '0%';
        titleElement.style.opacity = '0';
        contentWrapper.style.height = '100%';
        hero.style.height = '40rem';
        divideBottom.style.height = '0px';
        divideBottom.style.opacity = '0';
        divideTop.style.height = '70px';
        nav.style.opacity = '0';
    });
});
