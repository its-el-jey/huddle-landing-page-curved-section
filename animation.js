/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});


sr.reveal('.t-intro-heading', {}); 
sr.reveal('.t-intro-body', {delay:200, interval:200}); 
sr.reveal('.button', {delay:300, interval:300}); 
sr.reveal('.brand__logo', {delay:300, interval:300}); 
sr.reveal('.intro__image', {delay:350, interval:350}); 
sr.reveal('.statistic',{delay:500, interval: 500}); 
sr.reveal('.t-section-heading',{delay:400, interval: 400}); 
sr.reveal('.t-section-body',{delay:500, interval: 500}); 
sr.reveal('.section-image',{delay:500, interval: 500}); 
sr.reveal('.cta-heading',{delay:500, interval: 500}); 