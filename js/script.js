

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
           }
                
        }

        hideTabContent(1);

        function showTabContent(b) {
           if (tabContent[b].style.display = 'none') {
            tabContent[b].style.display = 'block';  
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
        
       
 
 
        // document.body.addEventListener('click', e =>{
        //     let target = e.target;
        //    // for(let i = 0; i < glazingBlock.length; i++) {
        //     (target.classList.contains('glazing_block') ) ?            
        //     linkBlock.classList.a
        //     console.log('пусто');
           
        //     //console.log(glazingBlock[i].lastElementChild.classList.add('active'));
           
        // });
 
 
        // // Тут нужна помощь не отрабатывает на клик имеджа
        // function tabsImgClick(event) {
        //    // let target = event.target;
        //     //for(let a = 0; a < imgBlock.length; a++) {
        //         if (imgBlock == target.event) {
        //             glazingBlock.lastElementChild.classList.add('active');
        //         }
        //     }
       
           
       
          
        // slickList.addEventListener('click', function(event) {
        //     let target = event.target;
        //     for(let i = 0; i < glazingBlock.length; i++) {
        //         glazingBlock[i].lastElementChild.classList.remove('active');
        //         if (glazingBlock[i] == target) {
        //             console.log(target);
        //             //tabsImgClick(target); // - не работает на клик картинки
        //             glazingBlock[i].lastElementChild.classList.add('active'); 
        //         }
                   
        //     }
        // });
   
 
    //img
 
    // function image() {
 
    
   
 
 
 
 
 
    modal();
    tabs();
  
 });
 
 
 