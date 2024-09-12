
window.addEventListener('load', () =>
    {
        document.body.classList.add('fade-in');
    });   
    
    
    document.addEventListener('DOMContentLoaded', () => {
        
        const returnButton = document.getElementById('returnButton');
        const aboutMeButton = document.getElementById('aboutMeButton');
        const portfolioButton = document.getElementById('portfolioButton');
        const contactButton = document.getElementById('contactButton');
        const aboutPage = document.getElementById('aboutPage');
        const portfolioPage = document.getElementById('portfolioPage');
        const contactPage = document.getElementById('contactPage');
        const titleElement = document.querySelector('.title');
        const divideBottom = document.querySelector('.divide-bottom');
        const divideTop = document.querySelector('.divide-top');
        const contentWrapper = document.querySelector('.content-wrapper');
        const hero = document.querySelector('.hero');
        const nav = document.querySelector('.nav');
    
    
        
        returnButton.addEventListener('click', () => {
            titleElement.style.maxWidth = '130%';
            titleElement.style.opacity = '1';
           
            hero.style.height = '22rem';
            divideBottom.style.height = '400px';
            divideBottom.style.opacity = '1';
            divideTop.style.height = '600px';
            nav.style.opacity = '1';
    
            aboutPage.style.transitionDelay = '0s';
            aboutPage.style.opacity = '0';
            aboutPage.style.width = '0%';
    
            portfolioPage.style.transitionDelay = '0s';
            portfolioPage.style.opacity = '0';
            portfolioPage.style.width = '0%';
    
            contactPage.style.transitionDelay = '0s';
            contactPage.style.opacity = '0';
            contactPage.style.width = '0%';
        });
    
        aboutMeButton.addEventListener('click', () => {
            titleElement.style.maxWidth = '0%';
            titleElement.style.opacity = '0';
            hero.style.height = '40rem';
            divideBottom.style.height = '0px';
            divideBottom.style.opacity = '0';
            divideTop.style.height = '70px';
            nav.style.opacity = '0';
    
            aboutPage.style.transitionDelay = '.6s';
            aboutPage.style.opacity = '1';
            aboutPage.style.width = 'inherit';
        });
    
        portfolioButton.addEventListener('click', () => {
            titleElement.style.maxWidth = '0%';
            titleElement.style.opacity = '0';
         
            hero.style.height = '40rem';
            divideBottom.style.height = '0px';
            divideBottom.style.opacity = '0';
            divideTop.style.height = '70px';
            nav.style.opacity = '0';
    
            portfolioPage.style.transitionDelay = '.6s';
            portfolioPage.style.opacity = '1';
            portfolioPage.style.width = 'inherit';
        });
    
        contactButton.addEventListener('click', () => {
            titleElement.style.maxWidth = '0%';
            titleElement.style.opacity = '0';
            titleElement.style.transitionDelay ='0'
            hero.style.height = '40rem';
            divideBottom.style.height = '0px';
            divideBottom.style.opacity = '0';
            divideTop.style.height = '70px';
            nav.style.opacity = '0';
    
            contactPage.style.transitionDelay = '.6s';
            contactPage.style.opacity = '1';
            contactPage.style.width = 'inherit';
        });
    
        
    
     
    
           
    });
    