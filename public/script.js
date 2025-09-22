  const lenis = new Lenis({
    duration: 1.2, // smooth speed
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing curve
    smoothWheel: true, // smooth mouse wheel
    smoothTouch: true  // smooth touch scrolling (mobile)
  });

  // RAF loop
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

