


window.addEventListener('load', () =>
    {
        
             
        document.body.attributeStyleMap.bottom = "0";

        document.body.classList.add('fade-in');
        t
        
    

        
    });   
    
    
    document.addEventListener('DOMContentLoaded', () => {

        
        
        const body = document.body;
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
        const pageBorder = document.getElementById("pageOpenBorder");
        
        
        
        
        returnButton.addEventListener('click', () => {

            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 'auto' for instant scroll
            });
            body.animate({scrollTop:0}, .1);
            
            titleElement.style.maxWidth = '130%';

            titleElement.style.opacity = '1';
            titleElement.style.height = 'fit-content';
            
            hero.style.height = '22rem';
            divideBottom.style.height = '400px';
            divideBottom.style.opacity = '1';
            divideTop.style.height = '60px';
            nav.style.opacity = '1';
            nav.style.maxHeight = '100%';

            body.style.overflow = 'hidden';
            
            
            aboutPage.style.opacity = '0';
            aboutPage.style.transition = 'opacity ease .2s 0s, width ease .4s, height ease .4s'
            pageBorder.style.opacity = '0';
            pageBorder.style.width = '0';
            pageBorder.style.borderRadius = '2px';
            pageBorder.style.transition = 'opacity .1s 0s, width ease .2s .6s, border-radius 0s .8s'
            
        
            
        });
    
        aboutMeButton.addEventListener('click', () => {

            titleElement.style.maxWidth = '0%';
            titleElement.style.opacity = '0';
            titleElement.style.height = '900px';
            hero.style.height = '40rem';
            
            
            divideBottom.style.height = '0px';
            divideBottom.style.opacity = '0';
            divideTop.style.height = '70px';
            nav.style.opacity = '0';
            nav.style.maxHeight = '0%';
            
            
            
            aboutPage.style.opacity = '1';
            aboutPage.style.transition = 'opacity ease .6s .8s, width ease .4s, height ease .4s'
            body.style.overflow = 'auto';
            pageBorder.style.opacity = '1';
            pageBorder.style.width = '40%';
            
            pageBorder.style.borderRadius = '20px';
            pageBorder.style.transition = 'opacity .1s .6s, width ease .2s .6s, border-radius .1s .8s'
            
            adjustPageMarginAbout(); // Add a margin below page
            
        });
    
        portfolioButton.addEventListener('click', () => {
            titleElement.style.maxWidth = '0%';
            titleElement.style.opacity = '0';
         
            hero.style.height = '40rem';
            divideBottom.style.height = '0px';
            divideBottom.style.opacity = '0';
            divideTop.style.height = '70px';
            nav.style.opacity = '0';
    
            adjustPageMarginPortfolio();
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

            adjustPageMarginPortfolio();
    
        });
    
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        body.animate({scrollTop:0}, .1);
    });

    window.addEventListener('resize', adjustPageMargin);

    function adjustPageMarginAbout() {
        const aboutPageHeight = aboutPage.offsetHeight; // Get height of the aboutPage
        pageMargin.style.height = aboutPageHeight + 'px'; // Match the height of pageMargin
    }
    function adjustPageMarginPortfolio() {
        const portfolioPageHeight = portfolioPage.offsetHeight; 
        pageMargin.style.height = portfolioPageHeight + 'px'; 
    }
    function adjustPageMarginPortfolio() {
        const contactPageHeight = contactPage.offsetHeight; 
        pageMargin.style.height = contactPageHeight + 'px'; 
    }