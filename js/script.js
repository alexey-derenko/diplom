

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
  
  
  
  
    //modal();
    
    function modal() {
        let modalButton = document.getElementsByTagName('button')[0],
            popupEngineer = document.querySelector('.popup_engineer'),
            popupCloseEngineer = document.querySelector('.popup_engineer .popup_close');
        //модальное окно вызов замерщика
        modalButton.addEventListener('click', function() {
            popupEngineer.style.display = 'block';          
        });
        // закрытие модальное окно на крестик вызов замерщика
        popupCloseEngineer.addEventListener('click', function() {
            popupEngineer.style.display = 'none';
            //document.body.style.overflow = '';
         
        });
       
        //закрытие модального окна по клику на подложку
        popupEngineer.addEventListener('click', function(event) {
            if (event.target.classList.contains('popup_engineer')) {
                popupEngineer.style.display = 'none';
            }
          
        });
       
        let phoneLink = document.querySelector('.phone_link'),
            popup = document.querySelector('.popup'),
            popupCloseColl = document.querySelector('.popup .popup_close');
       
        //открытие модальное окно - Заказать обратный звонок
        phoneLink.addEventListener('click', function() {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
       
        //закрытие модальное окно на крестик - Заказать обратный звонок
        popupCloseColl.addEventListener('click', function() {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        });
 
        //закрытие модального окна по клику на подложку-Заказать обратный звонок
        popup.addEventListener('click', function(event) {
            if (event.target.classList.contains('popup')) {
                popup.style.display = 'none';
            }
          
        });
    }
 
 
    //tabs
   
    function tabs() {

        let info = document.querySelector('.slick-list'),
            tab = document.querySelectorAll('.glazing_block'),
            tabContent = document.querySelectorAll('.glazing .row');

        function hideTabContent(a){
           for (let i = a;  i < tabContent.length; i++) {
            tabContent[i].style.display = 'none';
            tab[i].lastElementChild.classList.remove('active');
           }
                
        }

        hideTabContent(1);

        function showTabContent(b) {
           if (tabContent[b].style.display = 'none') {
            tabContent[b].style.display = 'block';
            tab[b].lastElementChild.classList.add('active');  
           } 
        }

        info.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains('glazing_block')) {
                for(let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0); 
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
 
    }
        
    
    // image
    
    function image() {  
        
        let works = document.querySelector('.works'), 
            image = document.querySelectorAll('a img'),
            div = document.body.children[0];

        function createDiv() {           
            div.style.cssText = "display: block;\
            position: fixed;\
            top: 0;\
            left: 0;\
            width: 100%;\
            height: 100%;\
            z-index: 10;\
            background-color: rgba(0, 0, 0, 0.5);\
            ";
        }

        div.addEventListener('click', function() {
            location.reload(true);    
        });
        
        function closeImage() {

            
        }
        
        works.addEventListener('click', function(event) {
            event.preventDefault();
            let target = event.target;
            
            for(let i = 0; i < image.length; i++) {
                if (target == image[i]) {
                    createDiv();      
                    image[i].style.cssText = "display: block;\
                    position: fixed;\
                    top: 25%;\
                    left: 35%;\
                    width: 500px;\
                    height: 500px;\
                    z-index: 10;\
                    background-color: rgba(0, 0, 0, 0.9);\
                    "; 
                }
            }

        });
        
        
    }
 
 
 
 
    modal();
    tabs();
    image();
  
 });
 
 
 