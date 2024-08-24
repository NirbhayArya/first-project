var cursor = document.querySelector('#cursor');
var cursorBlur = document.querySelector('#cursor-blur');


document.addEventListener("mousemove",(dets)=>{
  cursor.style.left = dets.x+"px";
  cursor.style.top = dets.y+"px";
  cursorBlur.style.left = dets.x- 150 +"px";
  cursorBlur.style.top = dets.y- 150 +"px";

});
// var h5all = document.querySelectorAll(".nav h5");
// h5all.forEach(element => {
//     element.addEventListener("mouseenter",()=>{
//     cursor.style.scale = 3;
//     cursor.style.border = "1px solid #fff";
//     cursor.style.backgroundColor = "transparent";
//   });
//     element.addEventListener("mouseleave",()=>{
//     cursor.style.scale = 1;
//     cursor.style.border = "1px solid blue";
//     cursor.style.backgroundColor = "blue";
//   });
// })
// var card = document.querySelector(".card");
//     card.addEventListener("mouseenter",()=>{
//     cursor.style.scale = 3;
//     cursor.style.border = "1px solid #fff";
//     cursor.style.backgroundColor = "transparent";
//   });
//     card.addEventListener("mouseleave",()=>{
//     cursor.style.scale = 1;
//     cursor.style.border = "1px solid blue";
//     cursor.style.backgroundColor = "blue";
//   });


document.addEventListener('DOMContentLoaded', function() {
  const tl = gsap.timeline();
  gsap.to(".nav", {
    backgroundColor: "#000", 
    duration: 1,
    height: "90px",
    scrollTrigger:{
      trigger: ".nav",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub:1
    }
  });
  tl.from("#title",{
    y: 200,
    duration: 1.5,
    opacity: 0,
    ease: "slow(0.7,0.7,false)"
  });
  tl.from("#title2",{
    y: 200,
    duration: 0.5,
    opacity: 0
  });
  tl.from("#para",{
    y: 200,
    duration: 0.5,
    opacity: 0
  });
  gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
      trigger: "#main",
      scroller: "body",
      start: "top -25%",
      end: "top -70%",
      scrub: 1

    }
  });
  gsap.from("#aboutus,#info",{
    y: 50,
    opacity:0,
    duration:1,
    stagger: 0.1,
    scrollTrigger:{
      trigger:"#aboutus",
      scroller:"body",
      start:"top 70%",
      end: "top 65%",
      scrub: 1
    }
  });
  // gsap.from(".card",{
  //   scale: 0.8,
  //   y: 50,
  //   opacity:0,
  //   duration:1,
  //   stagger: 0.1,
  //   scrollTrigger:{
  //     trigger:".card",
  //     scroller:"body",
  //     start:"top 70%",
  //     end: "top 65%",
  //     scrub: 1
  //   }
  // });
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    duration: 1,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 70%", // Adjusted start value
      end: "top 60%",   // Adjusted end value
      scrub: 4,
      marker: true    // Use true instead of 4
    }
  });
  
  gsap.from("#colon2", {
    y: -70,
    x: 70,
    duration: 1,
    scrollTrigger: {
      trigger: "#colon2",
      scroller:"body",
      start: "top 80%", // Adjusted start value based on your layout
      end: "top 60%",   // Adjusted end value based on your layout
      scrub: 4,
      marker: true       // Adjust scrubbing as needed
    }
  });
  
  
  // document.addEventListener("mousemove",(dets)=>{
  //   gsap.to("#cursor",{
  //     x: dets.x,
  //     y: dets.y,
  //     duration: 0.25
  //   });
  
//  })
});
