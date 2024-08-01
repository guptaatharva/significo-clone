function homePageAnimation(){
    gsap.set(".marquee-rows",{scale: 30})

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top", 
            end: "bottom bottom", 
            scrub: 2, 
        }
    })
    
    tl.to(".video-div",{
        '--clip': "0%",
        ease: Power2, 
    },'a')
    .to(".marquee-rows",{
        scale: 1, 
        ease: Power2
    },'a')
    .to(".lft",{
        xPercent: -10, 
        stagger:0.02, 
        ease: Power4
    },'b')
    .to(".rgt",{
        xPercent: 10, 
        stagger:0.02, 
        ease: Power4
    },'b')    
}
function realAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger: ".real", 
            start: "top top", 
            end:"bottom bottom", 
            scrub: 1,            
        }, 
        ease: Power4,
        xPercent: -200
    })
}
function teamAnimation(){
    document.querySelectorAll(".list-elem").forEach(function(el){
        el.addEventListener("mousemove",(dets)=>{
            gsap.to(el.querySelector(".picture"),{
                opacity: 1 ,
                top: dets.clientY - el.getBoundingClientRect().top ,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX) , 
                ease: Power2,
                duration: 0.2, 
            })
        })
        el.addEventListener("mouseleave",(dets)=>{
            gsap.to(el.querySelector(".picture"),{
                opacity: 0,
                ease: Power2,
                duration: 0.2, 
            })
        })
    })    
}
function parahsAnimation(){
    var clutter="" ;  
    document.querySelector(".text-para-1").textContent
    .split(" ")
    .forEach(function(e){
        clutter += `<span>${e} </span>`
    })
    document.querySelector(".text-para-1").innerHTML = clutter ;
    
    clutter="" ;  
    document.querySelector(".text-para-2").textContent
    .split(" ")
    .forEach(function(e){
        clutter += `<span>${e} </span>`
    })
    document.querySelector(".text-para-2").innerHTML = clutter ;
    
    gsap.set(".parahs span",{
        opacity:0.1
    })
    
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".parahs",
            start: "top 70%",
            end: "bottom 90%",
            scrub: 1
        }
    })
    
    tl2.to(".text-para-1 span",{
        opacity: 1, 
        stagger:1, 
        ease:Power4, 
    })
    .to(".text-para-2 span",{
        opacity: 1, 
        stagger:2, 
        ease:Power4, 
    })
}
function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsuleAnimation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: ".capsules",
            scrub: 1,
            start: "top 50%", 
            end: "bottom 90%"
        }
    })
    tl3.to(".capsule1",{
        y: 0, 
        ease: Power4
    },'a')
    .to(".capsule2",{
        y: 0, 
        ease: Power4
    },'a')
}
function colourChange(){
    document.querySelectorAll(".sections").forEach(function(e){
        gsap.to(e,{
            scrollTrigger:{
                trigger: e, 
                start: "top 50%", 
                end: "bottom 50%", 
                onEnter: function(){
                    document.body.setAttribute("theme",e.dataset.color)
                },
                onEnterBack: function(){
                    document.body.setAttribute("theme",e.dataset.color)
                }
            }, 
        })
        
    })
}
function slideAnimation(){

    var tl5 = gsap.timeline({
        scrollTrigger:{
            trigger: ".slide3", 
            start: "bottom 20%",
            end: "bottom -10%", 
            scrub:4 , 
            onEnter: function(){
                let total = 0 ; 
                let elem = document.querySelector(".women-percent") ; 
                let inter = setInterval(function(){
                    if(total < 49){
                        elem.textContent = total++ ; 
                    }else{
                        elem.textContent = total ;
                        clearInterval(inter) ;
                    }
                },40)
            }
        }
    })
    tl5.to(".slide3 .img1",{
        scale:1.2
    })
    .to(".slide3 .img2",{
        scale: 1.2
    })
    .to(".slide3 .expert",{
        y: 0
    })
    .to(".slide3 .small-text",{
        scale:1.2
    })

    gsap.to(".slide2 .people-count h1",{
        scrollTrigger:{
            trigger:".slide2",
            start: "bottom 80%",
            end: "bottom 45%", 
            scrub:4 , 
            onEnter: function(){
                let total = 0 ; 
                let elem = document.querySelector(".people-in-millions") ; 
                let inter = setInterval(function(){
                    if(total < 20){
                        elem.textContent = total++ ; 
                    }else{
                        elem.textContent = total ;
                        clearInterval(inter) ;
                    }
                },40) 

            }
        }
    })
    
}

loco() ; 
colourChange() ;
homePageAnimation() ; 
realAnimation() ;
slideAnimation() ;
teamAnimation() ; 
parahsAnimation() ;
capsuleAnimation() ;
