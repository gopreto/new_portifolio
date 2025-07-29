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

    let atualPx = 16;
    let outfont = document.getElementById("outfont");
    let infont = document.getElementById("infont");
    let numberPx = document.getElementsByTagName("number")

    outfont.addEventListener("click", () => {
        atualPx = atualPx - 0.5;
        numberPx[0].innerHTML = atualPx + "px";
        document.getElementsByClassName("xx")[0].style.fontSize = atualPx + "px";
    })

    infont.addEventListener("click", () => {
        atualPx = atualPx + 0.5;
        numberPx[0].innerHTML = atualPx + "px";
        document.getElementsByClassName("xx")[0].style.fontSize = atualPx + "px";
    })
};


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta){
        return;
    }
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    if(st === 0){
        $('header').removeClass('nav-down')
    }
    
    lastScrollTop = st;
}

