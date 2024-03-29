

document.addEventListener("DOMContentLoaded", function (){
    'use strict';

    Splitting();
    gsap.registerPlugin(ScrollTrigger);
    const gTl = gsap.timeline();

    gTl.from (".title .char" ,1 ,{opacity: 0 ,yPercent: 130,stagger: 0.06,ease:"back.out" });
    gTl.to (".header_img" ,2 ,{clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)"  });
    gTl.from(".header_img img " ,2 ,{scale: 1.4, ease: "expo.out"} ,"-=2");

    const gsapItem = gsap.utils.toArray('.kartu')
    gsapItem.forEach((gslt) => {
       
        const cardImages  = gslt.querySelectorAll('.card-img');

        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: gslt,
                start: "top 95% ",
                end: "top 80%",
                toggleActions:"play play play play",
            }
        });   
        tl.to(cardImages,1,{clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",opacity:1, ease:"expo.out"});
    })

});
//untuk all
    
function All () {

    gsap.from('.upper-tombol', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: true
        },
        opacity: 0,
        yPercent:-50
    })

    gsap.to('.t-img' ,{
        scrollTrigger: {
            end: 'bottom',
            trigger:'.kartu kartu-dua',
            scrub:3
        },
        yPercent:100
    })
    gsap.to('.titlegsap' ,{
        scrollTrigger: {
            trigger:'header',
            start:'top',
            scrub: true
        },
        yPercent: -180
    });
    gsap.to('.strokes-gsap' ,{
        scrollTrigger: {
            trigger:'header',
            start: 'top ',
            scrub: '2'
        },
        xPercent: 40,
        yPercent: 80

    })
    gsap.to('.header_img', {
        scrollTrigger: {
            trigger:'header',
            start: 'top ',
            scrub:'1'
        },
        xPercent: -70,
       
       

    })
    gsap.to('.header_img img', {
        scrollTrigger: {
            trigger:'header',
            start: 'top ',
            scrub: true
        },
        scale:1.2,
        duration: 2
    })

    gsap.to('.marque-txt', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub:'1'
			},
			xPercent: -50
	})
    gsap.to('.marq-star i', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: true
        },
        rotate: -720
    })
}

All()

       
//untuk pop up

const openBtns = document.querySelectorAll('.openBtn');
const closeBtns = document.querySelectorAll('.closeBtn');
const popupContainers = document.querySelectorAll('.popupContainer');

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';

}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}
openBtns.forEach(btn => {
    btn.addEventListener('click', () => {  
        
        const popupId = btn.getAttribute('data-popup');
        openPopup(popupId);       
        

        const gTl = gsap.timeline();
        gTl.fromTo(".popupContent",0.6, {clipPath: "polygon(0% 0%,0% 0%,0% 100%,0% 100%)" ,scrub: 'smooth'},
         {clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)"})
        gTl.from(".text-navbar .char",0.5 ,{opacity: 0 ,yPercent: 130,stagger: 0.06,ease:"back.out", delay: 1})
        
    });
    
});

closeBtns.forEach(btn => {  
    btn.addEventListener('click', () => {
        const popupId = btn.closest('.popupContainer').getAttribute('id');
        closePopup(popupId);
    });   
});
