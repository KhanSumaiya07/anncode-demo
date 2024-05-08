const navContainer = document.querySelector('.main-header');

gsap.set(navContainer, { y: '0%' });

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY >= 500) {
        gsap.to(navContainer, {
            // duration: 0.8,
            y: '0%',
            position: 'fixed',
            top: 0,
            backgroundColor: "white",
            boxShadow: "0 0 10px gray",
            padding: "1rem 3rem"

        });
    } else {
        gsap.to(navContainer, {
            // duration: 0.5,
            y: '0',
            position: 'relative',
            backgroundColor: "#f4feff",
            boxShadow: "0 0 0 gray",
            padding: "1.5rem 3rem"
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((paragraph) => {
        gsap.set(paragraph, { y: 30 });
        ScrollTrigger.create({
            trigger: paragraph,
            start: "top 80%", // Adjust as needed
            end: "bottom 20%", // Adjust as needed
            onEnter: () => gsap.to(paragraph, { y: 0, opacity: 1, duration: 0.5 }),
            onLeaveBack: () => gsap.to(paragraph, { y: 20, opacity: 0, duration: 0.5 }),
            onEnterBack: () => gsap.to(paragraph, { y: 0, opacity: 1, duration: 0.5 }),
            onLeave: () => gsap.to(paragraph, { y: 20, opacity: 0, duration: 0.5 })
        });
    });
     // Select all elements with class 'heading'
     const headings = document.querySelectorAll('.p-heading');
     // Loop through each heading
     headings.forEach((heading) => {
         // Set initial position
         gsap.set(heading, { x: "-50%", opacity: 0 });
 
         // GSAP animation using ScrollTrigger
         ScrollTrigger.create({
             trigger: heading,
             start: "top 80%", // Adjust as needed
             end: "bottom 20%", // Adjust as needed
             onEnter: () => gsap.to(heading, { x: "0%", opacity: 1, duration: 1.5 }),
             onLeaveBack: () => gsap.to(heading, { x: "-50%", opacity: 0, duration: 0.5 }),
             onEnterBack: () => gsap.to(heading, { x: "0%", opacity: 1, duration: 1.5 }),
             onLeave: () => gsap.to(heading, { x: "-50%", opacity: 0, duration: 0.5 })
         });
     });
});



$(document).ready(function () {
    $('.review-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
});


$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

