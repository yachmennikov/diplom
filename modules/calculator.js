const calculator = () => {
    const theWell = document.getElementById('myonoffswitch'),
          total = document.getElementById('calc-result'),
          secondWill = document.querySelectorAll('.second-will'),
          expandAll = document.querySelectorAll('.expand'),
          accordionBlock = document.getElementById('accordion');
          total.value = 0;

    
        theWell.addEventListener('change', () => {
            if (theWell.checked) {
                secondWill.forEach( item => item.classList.add('hidden'));
                total.value = 10000;  
            } else if (!theWell.checked) {
                secondWill.forEach( item => item.classList.remove('hidden'));
                total.value = 15000;  
            } 
        });
        
       
           
};

export default calculator;

