document.addEventListener('DOMContentLoaded', function() {
    const allNavLinks = document.querySelectorAll('.menu li a');
    const sections = document.querySelectorAll('.section');
    const sosmedSection = document.getElementById('sosmed');
    
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMobile = document.getElementById('navbar-mobile');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active-section');
        });

        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active-section');
        }

        if (sosmedSection) {
            sosmedSection.style.display = (sectionId === 'about') ? 'flex' : 'none';
        }
    }

    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);

            allNavLinks.forEach(nav => {
                if (nav.getAttribute('data-section') === sectionId) {
                    nav.classList.add('active');
                } else {
                    nav.classList.remove('active');
                }
            });

            if (window.innerWidth <= 768) {
                if (navbarMobile.classList.contains('active')) {
                    navbarMobile.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navbarMobile.classList.toggle('active');
        });
    }

    showSection('about');
    allNavLinks.forEach(nav => {
        if (nav.getAttribute('data-section') === 'about') {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
});