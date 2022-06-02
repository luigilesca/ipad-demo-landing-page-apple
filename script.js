// JAVASCRIPT

//menu toggle
let hamburger = document.querySelector('.header__hamburger');

hamburger.addEventListener('click', function () {
  document.body.classList.toggle('menu-open');
});

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// GSAP

gsap.from('.intro__bg', {
  scale: 0.6,
  duration: 0.8,
  opacity: 0,
  ease: Power2.easeOut,
  delay: 0.2,
  filter: 'blur(100px)',
});

// Fade-up Scroll Trigger batch

ScrollTrigger.batch('.fade-up', {
  start: 'top 90%',
  onEnter: (elements, triggers) => {
    gsap.to(elements, { opacity: 1, stagger: 0.3, y: 0, duration: 1.5, ease: Power2.easeOut });
  },
});

// Parallax Intro

gsap.to('.intro', {
  yPercent: 45,
  scale: 0.6,
  opacity: 0,
  scrollTrigger: {
    trigger: '.intro',
    scrub: true,
    start: 'top top',
    end: 'bottom center',
    // markers: true,
  },
});

// Video

let video_bg = document.querySelector('#video');

video_bg.pause();

let tl = gsap.timeline();

tl.to('.panel-video', {
  yPercent: -55,
  opacity: 1,
  scrollTrigger: {
    trigger: '.panel-video',
    scrub: true,
    start: 'top 80%',
    end: 'bottom 35%',
    // markers: true,
    onEnter: function () {
      video_bg.play();
    },
    onLeave: function () {
      video_bg.pause();
      tl.to('.panel-video', { opacity: 0 });
    },
  },
});

// Color inversion

gsap.to('.panel-invert', {
  scrollTrigger: {
    trigger: '.panel-invert',
    start: 'top 80%',
    end: 'bottom 30%',
    toggleClass: {
      targets: 'body',
      className: 'panel-white',
    },
    // markers: true,
  },
});

// Ipad big rotate

gsap.to('.ipad-big', {
  yPercent: -60, //-40
  xPercent: -40, // -40
  scale: 0.5,
  rotate: 25,
  scrollTrigger: {
    trigger: '.panel-invert',
    scrub: true,
    start: 'top 10%',
    end: 'bottom 20%',
    // markers: true,
  },
});

// Ipad big-3 rotate

gsap.to('.ipad-big-3', {
  yPercent: -60, //-40
  xPercent: -20, // -40
  scale: 0.5,
  rotate: -25,
  scrollTrigger: {
    trigger: '.ipad-big-3',
    scrub: true,
    start: 'top 80%',
    end: 'bottom top',
    // markers: true,
  },
});

gsap.to('.panel-m1', {
  yPercent: -80, //-40
  scale: 0.5,
  scrollTrigger: {
    trigger: '.panel-m1',
    scrub: true,
    start: 'top 80%',
    end: 'bottom top',
    // markers: true,
  },
});

// Ipad big rotate 4

gsap.to('.ipad-big-4', {
  yPercent: -80, //-40
  xPercent: 60, // -40
  scale: 0.5,
  rotate: 20,
  scrollTrigger: {
    trigger: '.ipad-big-4',
    scrub: true,
    start: 'top 80%',
    end: 'bottom top',
    // markers: true,
  },
});
