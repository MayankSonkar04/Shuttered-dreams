const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp:0.06,
   
  smooth: true,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  }
});

window.addEventListener("load", () => {
  scroll.update();  
});

