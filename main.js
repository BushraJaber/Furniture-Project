    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });




    document.addEventListener('DOMContentLoaded', () => {

window.onscroll=function(){
    const scroll=document.querySelector("nav");
    const about=document.querySelector(".back");
    if(window.scrollY >=about.offsetTop){
        scroll.classList.add('d-scroll');
    }else{
        scroll.classList.remove('d-scroll');
    }
}
    });


    document.addEventListener('DOMContentLoaded', () => {


const toggleButton = document.getElementById('toggle-dark-mode');
const sunIcon = '<i class="fas fa-sun"></i>';
const moonIcon = '<i class="fas fa-moon"></i>';

// التحقق من الوضع المحفوظ من localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButton.innerHTML = moonIcon;
} else {
    toggleButton.innerHTML = sunIcon;
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = moonIcon;
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        toggleButton.innerHTML = sunIcon;
        localStorage.setItem('dark-mode', 'disabled');
    }
});


});














var contactLink = document.getElementById('contact-link');
var contactSection = document.getElementById('contact');

contactLink.addEventListener('click', function(e) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
});




document.getElementById("first-div").addEventListener("click", function() {
    this.style.transition = "transform 0.5s";
    this.style.transform = "scale(1.5)";
    
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 800);
});



document.querySelectorAll(".card-container").forEach(function(card) {
    card.addEventListener("click", function() {
        this.style.transition = "transform 0.5s";
        this.style.transform = "scale(1.1)";
        
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 500);
    });
});


document.querySelectorAll(".card-containerr").forEach(function(card) {
    card.addEventListener("click", function() {
        this.style.transition = "transform 0.5s";
        this.style.transform = "rotate(10deg)";
        
        setTimeout(() => {
            this.style.transform = "rotate(0deg)";
        }, 500);
    });
});














