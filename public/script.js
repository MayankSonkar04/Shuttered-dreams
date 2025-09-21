const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp:0.06
});

window.addEventListener("load", () => {
  scroll.update();  
});