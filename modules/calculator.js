const calculator = () => {
    const theWell = document.getElementById('myonoffswitch'),
          total = document.getElementById('calc-result'),
          secondWill = document.querySelectorAll('.second-will'),
          expandAll = document.querySelectorAll('.expand'),
          accordionBlock = document.getElementById('accordion');
          total.value = 10000;

    
        theWell.addEventListener('change', () => {
            if (theWell.checked) {
                secondWill.forEach( item => item.classList.add('hidden'));
               
            } else if (!theWell.checked) {
                secondWill.forEach( item => item.classList.remove('hidden'));
                total.value = 15000;
            } 
        });
        
       
            accordionBlock.addEventListener('change', (event) => {
                let target = event.target;
                if (target.value === expandAll[0].options[1].value) {
                    total.value = total.value / 100 * 120;
                    console.log(total.value);
                } else if (target.value === expandAll[0].options[0].value){
                    total.value = 10000;  
                }
                total.value = total.value;
                if (target.value === expandAll[1].options[0].value) {
                   return;
                } else if (target.value === expandAll[1].options[1].value) {
                    total.value = total.value / 100 * 130;
                    console.log(total.value);
                } else if (target.value === expandAll[1].options[2].value) {
                    total.value = total.value / 100 * 150;
                    console.log(total.value);
                }
            })
            
    
};

export default calculator;