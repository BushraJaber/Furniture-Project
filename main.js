document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-link');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            links.forEach(function(link) {
                link.classList.remove('active');
            });
            
            this.classList.add('active');
        });
    });
});




window.onscroll=function(){
    const scroll=document.querySelector("nav");
    const about=document.querySelector(".back");
    if(window.scrollY >=about.offsetTop){
        scroll.classList.add('d-scroll');
    }else{
        scroll.classList.remove('d-scroll');
    }
}

const socialIcons = document.querySelectorAll('.social-icons a');

// تعيين اللون الأصلي للأيقونات
const originalColor = '#ffffff';
const hoverColor = '#2e9e9a'; // اللون عند التمرير

socialIcons.forEach(icon => {
    // تغيير اللون عند التمرير
    icon.addEventListener('mouseover', () => {
        icon.style.color = hoverColor;
    });

    // إعادة اللون الأصلي عند مغادرة الماوس
    icon.addEventListener('mouseout', () => {
        icon.style.color = originalColor;
    });
});










document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const sunIcon = '<i class="fas fa-sun "></i> ';
    const moonIcon = '<i class="fas fa-moon"></i>';

    // Check the saved theme from localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleButton.innerHTML = moonIcon;
    } else {
        toggleButton.innerHTML = sunIcon;
    }

    toggleButton.addEventListener('click', function() {
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

















document.addEventListener('DOMContentLoaded', function() {
    var contactLink = document.getElementById('contact-link');
    var contactSection = document.getElementById('contact');

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();

        var contactTop = contactSection.offsetTop;
        var currentScroll = window.scrollY;

        if (currentScroll >= contactTop && currentScroll < contactTop + contactSection.offsetHeight) {
            // إذا كنت بالفعل في القسم "Contact"، انتقل إلى أعلى الصفحة
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // إذا كنت في مكان آخر، انتقل إلى قسم "Contact"
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});




document.getElementById("first-div").addEventListener("click", function() {
    this.style.transition = "transform 0.5s";
    this.style.transform = "scale(1.5)";
    
    // العودة إلى الحجم الأصلي بعد فترة
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 800);
});


document.querySelectorAll(".card-container").forEach(function(card) {
    card.addEventListener("click", function() {
        this.style.transition = "transform 0.5s";
        this.style.transform = "scale(1.1)";
        
        // العودة إلى الحجم الأصلي بعد فترة
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














