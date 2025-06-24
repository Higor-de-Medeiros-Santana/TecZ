console.log("Página carregada com sucesso.");
 const menuIcon = document.getElementById('menu-icon');
        const offcanvas = document.getElementById('offcanvas-menu');
        const closeMenuButton = document.getElementById('close-menu');

        function toggleOffcanvasVisibility() {
            if (window.innerWidth > 992) {
                offcanvas.classList.remove('show');
                offcanvas.style.display = 'none';
            } else {
                if (!offcanvas.classList.contains('show')) {
                    offcanvas.style.display = '';
                }
            }
        }
        window.addEventListener('DOMContentLoaded', toggleOffcanvasVisibility);
        window.addEventListener('resize', toggleOffcanvasVisibility);

        if (menuIcon) {
            menuIcon.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    offcanvas.classList.add('show');
                    offcanvas.style.display = '';
                }
            });
        }
        if (closeMenuButton) {
            closeMenuButton.addEventListener('click', () => {
                offcanvas.classList.remove('show');
            });
        }