// import LocomotiveScroll from 'locomotive-scroll';
var m=function firstpageaniim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
      .to(".boundingelem",{
        y:0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger:.35
        
      })
}

function mousechapta(){
  var xscale=1
  var yscale=1;
  var xprev=0;
  var yprev=0;
  window.addEventListener("mousemove", function(dets) {
    xscale=gsap.utils.clamp(.8, 1.2, xdiff);
    yscale=gsap.utils.clamp(.8, 1.2, ydiff);
    var xdiff=dets.clientX-xprev;
    var ydiff=dets.clientY-yprev;
    xprev=dets.clientX;
    yprev=dets.clientY;
    mousemove(xscale,yscale);
   
});
}
function mousemove(xscale,yscale){
var b=document.querySelector("#circle")
window.addEventListener("mousemove", function(dets) {
    b.style.opacity=1;
     b.style.top=dets.clientY+"px";
     b.style.left=dets.clientX+"px";    
     b.style.transform=`scale(${xscale},${yscale})`;
});
}

 document.querySelectorAll("#car").forEach(function(elem){
  var rotate=0;
  var diffrot=0;
  elem.addEventListener(("mouseleave"), function(){
    gsap.to(elem.querySelector("img"),{
     opacity:0,
      ease:Power1
    });
  });
  elem.addEventListener(("mousemove"), function(e){
    diffrot=e.clientX-rotate;
    rotate=e.clientX;
    gsap.to(elem.querySelector("img"),{
      opacity:1,
      left:e.clientX,
      scale:1.25,
      ease:Power3,
      rotate:gsap.utils.clamp(-40,40,diffrot)
    });
});
 });

m();
mousechapta();
mousemove();


