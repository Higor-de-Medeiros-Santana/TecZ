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
        const sliderImgs = document.querySelectorAll(".slider img");
        const sliderDots = document.querySelectorAll(".slider .paginacao .botao i");
        const sliderLeftArrow = document.querySelector(".slider .arrow-left");
        const sliderRightArrow = document.querySelector(".slider .arrow-right");

        let currentSlideIndex = 0;
        let slideTime = 7000;
        let autoSlideInterval;

        const defClass = (startPos, index) => {
            for (let i = startPos; i < sliderImgs.length; i++) {
                sliderImgs[i].style.display = "none";
                sliderDots[i].classList.remove("fa-circle-dot");
                sliderDots[i].classList.add("fa-circle");
            }
            sliderImgs[index].style.display = "block";
            sliderDots[index].classList.remove("fa-circle");
            sliderDots[index].classList.add("fa-circle-dot");
        };

        const resetAutoSlide = () => {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        };

        defClass(0, 0); 

        if (sliderLeftArrow) { 
            sliderLeftArrow.addEventListener("click", function(){
                currentSlideIndex <= 0 ? currentSlideIndex = sliderImgs.length-1 : currentSlideIndex--;
                defClass(0, currentSlideIndex);
                resetAutoSlide();
            });
        }

        if (sliderRightArrow) {
            sliderRightArrow.addEventListener("click", function(){
                currentSlideIndex >= sliderImgs.length-1 ? currentSlideIndex = 0 : currentSlideIndex++;
                defClass(0, currentSlideIndex);
                resetAutoSlide();
            });
        }

        sliderDots.forEach((dot, index) => {
            dot.addEventListener("click", function() {
                currentSlideIndex = index;
                defClass(0, currentSlideIndex);
                resetAutoSlide();
            });
        });

        const startAutoSlide = () => {
            autoSlideInterval = setInterval(() => {
                currentSlideIndex >= sliderImgs.length-1 ? currentSlideIndex = 0 : currentSlideIndex++;
                defClass(0, currentSlideIndex);
            }, slideTime);
        };
        startAutoSlide();
        document.addEventListener('DOMContentLoaded', function() {
            const categoryContainer = document.querySelector('.category-container');
            const categoryArrowLeft = document.querySelector('.category-section .category-arrow-left');
            const categoryArrowRight = document.querySelector('.category-section .category-arrow-right');

            if (categoryContainer && categoryArrowLeft && categoryArrowRight) {
                categoryArrowRight.addEventListener('click', function() {
                    categoryContainer.scrollBy({
                        left: categoryContainer.offsetWidth / 2,
                        behavior: 'smooth'
                    });
                });

                categoryArrowLeft.addEventListener('click', function() {
                    categoryContainer.scrollBy({
                        left: -categoryContainer.offsetWidth / 2,
                        behavior: 'smooth'
                    });
                });
            } else {
                console.warn('Elementos do carrossel de categorias não encontrados. Verifique as classes e a estrutura HTML.');
            }
        });