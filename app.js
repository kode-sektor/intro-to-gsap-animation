const tl = gsap.timeline({defaults: {ease : 'power1.out'}})

// Move up. Dtagger: line-by-line movement instead of as one contiguous block
tl.to('.text', {y: '0%', duration: 1, stagger: 0.25}) 

tl.to('.slider', {y : '-100%', duration: 1.5, delay: 1.5})

tl.to('.intro', {y: '-100%', duration: 1}, "-=1") // Start 1 sec faster

// Start from 0 opacity to 1 for nav
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1})

// Start 1 sec faster which annuls the 1-sec duration of the previous
// meaning it starts at the same time
tl.fromTo('.bigText', {opacity: 0}, {opacity: 1, duration: 1}, '-=1')

