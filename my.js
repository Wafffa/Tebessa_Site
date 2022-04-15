const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".banner-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".definition", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".dev photo", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".location", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".articales", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".aricales_title", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".image-title", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".image", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".hotels_title", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".hotels", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".restaurants-title", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".restaurants", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".contact", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");








// articales animation part 

     const accordion = document.getElementsByClassName('contentBx');

     for (i = 0 ; i<accordion.length; i++){
       accordion[i].addEventListener('click', function(){
           this.classList.toggle('active')
       })  
     }

