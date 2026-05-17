 const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const reveals = document.querySelectorAll('.reveal');
    const contactForm = document.getElementById('contactForm');
    const formNote = document.getElementById('formNote');
    const year = document.getElementById('year');

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinkItems.forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(item => observer.observe(item));

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formNote.textContent = 'Thank you! Your message has been sent successfully.';
      contactForm.reset();
    });

    year.textContent = new Date().getFullYear();