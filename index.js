
    
    const links = document.querySelectorAll('.sidebar a');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault(); 
      alert('Thank you for your message! I will get back to you soon.');
      form.reset(); 
    });
  