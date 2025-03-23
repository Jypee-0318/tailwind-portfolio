document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll into view with smooth behavior
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  document.getElementById('downloadCV').addEventListener('click', function () {
    // File path to the CV
    const filePath = '/assets/DelaCruz.JP.RESUME.pdf';
    const fileName = 'DelaCruz_JP_RESUME.pdf';
  
    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = filePath;
    a.download = fileName;
  
    // Trigger the download
    document.body.appendChild(a);
    a.click();
  
    // Clean up
    document.body.removeChild(a);
  });
  