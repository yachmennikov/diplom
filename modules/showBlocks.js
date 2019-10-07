const showBlocks = () => {
    const showBtn = document.querySelector('.add-sentence-btn'),
         blocks = document.querySelectorAll('.blocks > div');

         showBtn.addEventListener('click', () => {
            showBtn.style.display = 'none';
            blocks.forEach( (item) => {
                item.classList.remove('hidden', 'visible-sm-block');
            });
         })
};

export default showBlocks;