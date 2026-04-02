(function() {
  "use strict";

  /**
   * Hero type effect
   */
  const typed = document.querySelector('.typed');
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Mobile nav toggle
   */
  document.addEventListener('click', function(e) {
    if (e.target.matches('.mobile-nav-toggle')) {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      e.target.classList.toggle('bx-menu');
      e.target.classList.toggle('bx-x');
    }
  });

  /**
   * Scroll with offset on links with a class name .scrollto
   */
  document.querySelectorAll('.scrollto').forEach(el => {
    el.addEventListener('click', function(e) {
      if (document.querySelector(this.hash)) {
        e.preventDefault();

        let body = document.querySelector('body');
        if (body.classList.contains('mobile-nav-active')) {
          body.classList.remove('mobile-nav-active');
          let navbarToggle = document.querySelector('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bx-menu');
          navbarToggle.classList.toggle('bx-x');
        }
        window.scrollTo({
          top: document.querySelector(this.hash).offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  /**
   * Nav menu active state on scroll
   */
  window.addEventListener('load', navActiveState);
  window.addEventListener('scroll', navActiveState);

  function navActiveState() {
    let position = window.scrollY + 200;
    document.querySelectorAll('#navbar .scrollto').forEach(navbarlink => {
      if (!navbarlink.hash) return;
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  }

  /**
   * Initialize AOS Animation
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  });

  /**
   * WhatsApp form integration
   */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      
      const whatsappNumber = "918978352011";
      const text = `Hello Akhil,%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
      
    // Open WhatsApp Web/App in a new tab with the prefilled message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappURL, '_blank');
  });
  }

  /**
   * Initialize GLightbox
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

})();
