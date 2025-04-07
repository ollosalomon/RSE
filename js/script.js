document.addEventListener('DOMContentLoaded', function() {

    // --- Gestion de l'année courante dans le footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Gestion du menu mobile (hamburger) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.main-nav .nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            // Bascule la classe 'active' sur la liste de navigation
            navList.classList.toggle('active');

            // Change l'attribut aria-expanded pour l'accessibilité
            const isExpanded = navList.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);

            // Optionnel: Change l'icône du bouton (Exemple: ☰ vers X)
            // menuToggle.textContent = isExpanded ? '✕' : '☰';
        });

        // --- Ferme le menu si on clique sur un lien (pour les ancres) ---
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    // Optionnel: Remettre l'icône initiale
                    // menuToggle.textContent = '☰';
                }
            });
        });

        // --- Ferme le menu si on clique en dehors (optionnel mais bonne pratique) ---
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navList.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                // menuToggle.textContent = '☰';
            }
        });
    }

    // --- Autres scripts potentiels ---
    // Ex: Animations au défilement, validation de formulaire, etc.

});