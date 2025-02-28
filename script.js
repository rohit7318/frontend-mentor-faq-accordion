document.querySelector('.faq-container').addEventListener('click', function(event) {
    if (event.target.closest('.toggle-btn')) {
        const btn = event.target.closest('.toggle-btn');
        const answer = btn.parentElement.nextElementSibling;
        const img = btn.querySelector('img');
        
        if(answer.classList.contains('show'))
        {
            answer.style.height = `${answer.scrollHeight}px`; // Set height to its scroll height to trigger transition
            requestAnimationFrame(()=> 
            {
                answer.style.height = '0';
            });
            answer.classList.remove('show');
            img.src = './assets/images/icon-plus.svg'; // Change to plus icon
        } 
        else 
        {
            answer.style.height = `${answer.scrollHeight}px`;
            answer.classList.add('show');
            img.src = './assets/images/icon-minus.svg'; // Change to minus icon
            answer.addEventListener('transitionend', () => {
                if(answer.classList.contains('show')) 
                {
                    answer.style.height = 'auto'; // Reset height to auto after transition
                }
            }, { once: true });
        }
    }
});