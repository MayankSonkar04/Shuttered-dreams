const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
  smartphone: {
    smooth: false
  },
  tablet: {
    smooth: false
  }
});

window.addEventListener("load", () => {
  scroll.update();  
});

