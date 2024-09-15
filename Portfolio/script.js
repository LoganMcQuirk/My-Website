


window.addEventListener('load', () =>
    {
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
    
        
        
        returnButton.addEventListener('click', () => {

            
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
            
            aboutPage.style.transition = 'opacity ease .2s, width ease .4s, height ease .4s'
            aboutPage.style.transitionDelay = '0s';
            aboutPage.style.opacity = '0';
            
            
            
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
            
            aboutPage.style.transition = 'opacity ease .6s, width ease .4s, height ease .4s'
            aboutPage.style.transitionDelay = '.6s';
            aboutPage.style.opacity = '1';
            aboutPage.style.transition = 'opacity ease .6s, width ease .4s, height ease .4s'
            body.style.overflow = 'visible';
            

        });
    
        portfolioButton.addEventListener('click', () => {
            titleElement.style.maxWidth = '0%';
            titleElement.style.opacity = '0';
         
            hero.style.height = '40rem';
            divideBottom.style.height = '0px';
            divideBottom.style.opacity = '0';
            divideTop.style.height = '70px';
            nav.style.opacity = '0';
    
            
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
    
        });
    
        
    
     
    
           
    });

    $(document).ready(function(){
        
        });