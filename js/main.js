$(document).ready(function () { 

$(window).scroll(function () { 
        if ($(window).scrollTop() > 0) {
            $(".header .navbar-brand img").css("max-width", "10rem");
        } else { 
            $(".header .navbar-brand img").css("max-width", "15rem");
        }
    });
	
	
	
    let target = '.about-block, .services-block, .team-block, .testimonial-block, .news-block';
    let options = {
        delay: 250,
        duration: 250,
        distance: '3rem',
        origin: 'bottom',
        opacity: 0,
        desktop: true,
        mobile: true,
        reset: true
    }
    ScrollReveal().reveal(target, options);

    // Item Reveal Animations
    let news = ".news-each, .team-card";
    let newsOptions = {
        delay: 0,
        duration: 500,
        distance: '3rem',
        origin: 'bottom',
        desktop: true,
        mobile: false,
        reset: true
    }
    ScrollReveal().reveal(news, newsOptions);
});