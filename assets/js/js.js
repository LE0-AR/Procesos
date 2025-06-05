let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;

nextBtn.onclick = () => {
    active = active + 1;
    setSlider();
}
prevBtn.onclick = () => {
    active = active - 1;
    setSlider();
}
const setSlider = () => {
    let oldActive = document.querySelector('.slider .list .item.active');
    if(oldActive) oldActive.classList.remove('active');
    items[active].classList.add('active');
    // 
    nextBtn.classList.remove('d-none');
    prevBtn.classList.remove('d-none');
    if(active == lastPosition) nextBtn.classList.add('d-none');
    if(active == firstPosition) prevBtn.classList.add('d-none');
}
setSlider();

// set diameter
const setDiameter = () => {
    // Se actualiza el selector para el slider principal
    let slider = document.querySelector('.slider'); // Anteriormente: '.sliders'
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter + 'px');
}
setDiameter();
window.addEventListener('resize', () => {
    setDiameter();
})


/*Content */
document.addEventListener('DOMContentLoaded', () => {
    const sliderItems = document.querySelectorAll('.items');
    const carousel = document.querySelector('.banner .sliders');

    sliderItems.forEach(item => {
        item.addEventListener('click', () => {
            const cardId = item.getAttribute('data-card');
            const cardDetail = document.querySelector(`.card[data-card="${cardId}"]`);
            if (cardDetail) {
                cardDetail.classList.add('active');
            }
            if (carousel) {
                carousel.style.animationPlayState = 'paused';
            }
        });
    });

    const closeBtns = document.querySelectorAll('.close-card');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cardDetail = btn.closest('.card');
            if (cardDetail) {
                cardDetail.classList.remove('active');
            }
            if (carousel) {
                carousel.style.animationPlayState = 'running';
            }
        });
    });
});


/*Fases*/
 $(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});