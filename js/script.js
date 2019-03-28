

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
            document.body.style.overflow = 'hidden';  
            
            //console.log(popupClose);
        });

        //закрытие модальное окно вызов замерщика
        popupCloseEngineer.addEventListener('click', function() {
            popupEngineer.style.display = 'none'; 
            document.body.style.overflow = '';  
            
            
            //сделал закрытие на общий клик формы
        });

        let phoneLink = document.querySelector('.phone_link'),
            popup = document.querySelector('.popup'),
            popupCloseColl = document.querySelector('.popup .popup_close');

        phoneLink.addEventListener('click', function() {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden'; 
        });

        popupCloseColl.addEventListener('click', function() {
            popup.style.display = 'none'; 
            document.body.style.overflow = '';
        });


        $('.overlay,.close').on('click',function(){
            $('.overlay,.modal').hide();
        });
        

        
    }

    modal();
    


});