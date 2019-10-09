const accordion = () => {
    const panelGroup = document.querySelectorAll('.panel-group'),
          panelHeads = document.querySelectorAll('.panel-heading'),
          panelContent = document.querySelectorAll('.panel-collapse'),
          checkboxes = document.querySelectorAll('.onoffswitch-checkbox');

          const toggleTab = (index) => {
            for (let i = 0; i < panelContent.length; i++) {
                    if (index === i) {
                        panelContent[i].classList.add('in');
                    } else {
                        panelContent[i].classList.remove('in');
                    }
                }
          };
           
          panelGroup.forEach( (item) => {
                item.addEventListener('click', (event) => {
                    
                        let target = event.target;
                       
                        if (target.matches('.construct-btn span') || target.matches('.construct-btn')) {
                            panelHeads.forEach( (Item, i) => {
                                Item = target.closest('.panel-collapse').previousElementSibling;
                                
                                if (Item) {
                                    event.preventDefault(); 
                                    panelHeads.forEach( (item, i) => {
                                        if (item === Item) {
                                            if (i < 3) {
                                                
                                                i++;
                                                toggleTab(i);
                                            } else {
                                                return;
                                            }
                                           
                                        }
                                    });
                                }   
    
                            });
                            } else {
                            target = target.closest('.panel-heading');
                            if (target) {
                                panelHeads.forEach( (item, i) => {
                                    if (item === target) {
                                        toggleTab(i);
                                    }
                                });
                            }
                        }   
                })
          });
};          

export default accordion;

