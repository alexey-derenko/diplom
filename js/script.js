

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
        let slickTrack = document.querySelector('.slick-track'),
            glazingBlock = document.querySelector('.glazing_block'),
            imgBlock = document.getElementsByTagName('.glazing_block img'),
            linkBlock = document.querySelectorAll('.slick-track .glazing_block a');
            

        slickTrack.addEventListener('click', function(event) {
            //event.target.classList.contains('glazing_block')
            if ( event.target.tagName == 'A' || event.target.tagName == 'IMG') {
                //event.target.tagName('a') =
               // console.log('slick-track');               
               for(let i = 0; i < linkBlock.length; i++) {
                  // if ( (event.target && event.target.tagName == 'A') || (event.target && event.target.tagName == 'IMG') ) {
                    linkBlock[i].classList.remove('active');
                  //  linkBlock.className += ' active';
                 //  } else {
                   // linkBlock[i].classList.add('active');
                   // break;
                 //  }

               }
               
              linkBlock[this].classList.add('active');
               //this.linkBlock.classList.add('active');
               
                //console.log(linkBlock); event.target.className += ' active';
            } else {
               // linkBlock[i].classList.add('active');
              console.log('Нема ' + ' slick-track');
            }
            
        });

        // glazingBlock.addEventListener('click', function() {
        //     console.log('glazing_block');
        // });


    }





    modal();
    tabs();
   
 
 
 });
 
 