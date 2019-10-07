const myModalWindows = () => {
    const popupCall = document.querySelector('.popup-call'),
          popupDiscount = document.querySelector('.popup-discount'),
          popupCheck = document.querySelector('.popup-check'),
          popupConsultation = document.querySelector('.popup-consultation');

    document.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.call-btn') && target.parentNode.matches('.contacts')) {
            popupCall.style.display = 'block';
        } else if (target.matches('.popup-close')) {
            target.closest('.popup').style.display = 'none';
        } else if (target.matches('.sentence-btn')) {
            popupDiscount.style.display = 'block';
        } else if (target.matches('.check-btn')) {
            popupCheck.style.display = 'block';
        } else if (target.matches('.consultation-btn')) {
            popupConsultation.style.display = 'block';
        } else if (target.matches('.popup')) {
            target.style.display = 'none';
        } else if (target.matches('.popup-content')) {
            event.stopPropagation();  
            target.closest('.popup').style.display = 'block';
        }
    }); 
};

export default myModalWindows;