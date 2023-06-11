// gestion du compteur pour les quantité d'articles
export function counter() {
    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    const setCount = document.querySelector('.count');
    
    let count = 1;

    function updateCount() {
        setCount.textContent = count;
    }
    updateCount();

    decrementButton.addEventListener('click', function(){
        if (count > 1) {
            count--;
            updateCount();
        }
    });

    incrementButton.addEventListener('click', function() {
        count++;
        updateCount();

        updateCount();
    })
};