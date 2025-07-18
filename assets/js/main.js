window.onload = (event) => {
    menuToggle = document.querySelector('.menu-toggle');
    menuToggleIcon = document.querySelector('.menu-toggle-icon');
    menuToggle.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) {
            menuToggleIcon.src = './assets/icons/bars.svg';
        } else {
            menuToggleIcon.src = './assets/icons/close-bold.svg';
        }
        e.target.classList.toggle('active');
    });
};