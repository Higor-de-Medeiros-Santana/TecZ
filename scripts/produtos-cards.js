document.addEventListener('DOMContentLoaded', () => {
    const carouselContainers = document.querySelectorAll('.carousel-container');

    carouselContainers.forEach(container => {
        const carouselTrack = container.querySelector('.product-carousel-track');
        const productCards = carouselTrack.querySelectorAll('.product-card');
        const prevButton = container.querySelector('.carousel-button.prev');
        const nextButton = container.querySelector('.carousel-button.next');
        const indicatorsContainer = document.querySelector(`#${container.id.replace('-carousel', '-indicators')}`);

        let currentIndex = 0;
        const totalCards = productCards.length;

        if (totalCards === 0) {
            container.style.display = 'none';
            return;
        }

        function updateCarousel() {
            const slideWidth = productCards[0].offsetWidth;
            const offset = -currentIndex * slideWidth;
            carouselTrack.style.transform = `translateX(${offset}px)`;
            updateIndicators();

            if (prevButton) prevButton.disabled = currentIndex === 0;
            if (nextButton) nextButton.disabled = currentIndex === totalCards - 1;
        }

        function createIndicators() {
            if (!indicatorsContainer) return;
            indicatorsContainer.innerHTML = '';
            for (let i = 0; i < totalCards; i++) {
                const indicator = document.createElement('div');
                indicator.classList.add('indicator');
                if (i === currentIndex) {
                    indicator.classList.add('active');
                }
                indicator.addEventListener('click', () => {
                    currentIndex = i;
                    updateCarousel();
                });
                indicatorsContainer.appendChild(indicator);
            }
        }

        function updateIndicators() {
            if (!indicatorsContainer) return;
            const indicators = indicatorsContainer.querySelectorAll('.indicator');
            indicators.forEach((ind, i) => {
                if (i === currentIndex) {
                    ind.classList.add('active');
                } else {
                    ind.classList.remove('active');
                }
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                if (currentIndex < totalCards - 1) {
                    currentIndex++;
                    updateCarousel();
                }
            });
        }

        createIndicators();
        updateCarousel();

        let startX;
        let isDragging = false;
        let currentTranslate = 0;
        let prevTranslate = 0;

        carouselTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            const transformMatrix = window.getComputedStyle(carouselTrack).getPropertyValue('transform');
            if (transformMatrix && transformMatrix !== 'none') {
                const matrixValues = transformMatrix.split('(')[1].split(')')[0].split(',');
                prevTranslate = parseFloat(matrixValues[4]);
            } else {
                prevTranslate = 0;
            }
            carouselTrack.style.transition = 'none';
        });

        carouselTrack.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();

            const currentX = e.touches[0].clientX;
            const diffX = currentX - startX;
            currentTranslate = prevTranslate + diffX;

            const slideWidth = productCards[0].offsetWidth;
            const maxTranslate = 0;
            const minTranslate = -(totalCards - 1) * slideWidth;
            currentTranslate = Math.max(minTranslate, Math.min(maxTranslate, currentTranslate));

            carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
        });

        carouselTrack.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            carouselTrack.style.transition = 'transform 0.5s ease-in-out';

            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            const slideWidth = productCards[0].offsetWidth;
            const threshold = slideWidth / 4;

            if (diff > threshold && currentIndex < totalCards - 1) {
                currentIndex++;
            } else if (diff < -threshold && currentIndex > 0) {
                currentIndex--;
            }
            updateCarousel();
        });

        window.addEventListener('resize', () => {
            updateCarousel();
            createIndicators();
        });

    });
});