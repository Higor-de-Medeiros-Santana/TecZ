// Troca imagem principal ao clicar na miniatura (para desktop)
const mainProductImage = document.getElementById("product-main-image");
const thumbnailImageList = document.querySelectorAll(".image-list"); // Seleciona todas as miniaturas

// Carrossel de imagens principal para mobile
const mobileCarouselImages = document.querySelectorAll('.mobile-product-carousel .carousel-img');
const mobileCarouselPrevBtn = document.querySelector('.mobile-product-carousel .carousel-arrow.prev');
const mobileCarouselNextBtn = document.querySelector('.mobile-product-carousel .carousel-arrow.next');

let currentMobileImageIndex = 0; // Índice da imagem atual no carrossel mobile

// Função para atualizar a imagem principal no desktop e o destaque da miniatura
function updateDesktopMainImage(index) {
    if (mainProductImage && thumbnailImageList.length > index) {
        mainProductImage.src = thumbnailImageList[index].src;
        thumbnailImageList.forEach(img => img.classList.remove('active-thumbnail'));
        thumbnailImageList[index].classList.add('active-thumbnail');
    }
}

// Função para atualizar a imagem no carrossel mobile
function updateMobileCarousel() {
    mobileCarouselImages.forEach((img, index) => {
        if (index === currentMobileImageIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

// Lógica para o carrossel de miniaturas (desktop)
thumbnailImageList.forEach((img, idx) => {
    img.addEventListener('click', function() {
        updateDesktopMainImage(idx);
    });
});

// Lógica para o carrossel de imagens principal para mobile
if (mobileCarouselImages.length > 0) { // Garante que o carrossel mobile exista
    mobileCarouselPrevBtn.addEventListener('click', () => {
        currentMobileImageIndex = (currentMobileImageIndex > 0) ? currentMobileImageIndex - 1 : mobileCarouselImages.length - 1;
        updateMobileCarousel();
    });

    mobileCarouselNextBtn.addEventListener('click', () => {
        currentMobileImageIndex = (currentMobileImageIndex < mobileCarouselImages.length - 1) ? currentMobileImageIndex + 1 : 0;
        updateMobileCarousel();
    });

    // Adicionar funcionalidade de swipe para o carrossel mobile
    let startX = 0;
    let endX = 0;
    const mobileCarouselContainer = document.querySelector('.mobile-product-carousel .carousel-images'); // A área swipeable

    mobileCarouselContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    mobileCarouselContainer.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    mobileCarouselContainer.addEventListener('touchend', () => {
        const diff = startX - endX;

        if (Math.abs(diff) > 50) { // Considera um swipe se a distância for maior que 50px
            if (diff > 0) {
                // Swiped left (next image)
                currentMobileImageIndex = (currentMobileImageIndex < mobileCarouselImages.length - 1) ? currentMobileImageIndex + 1 : 0;
            } else {
                // Swiped right (previous image)
                currentMobileImageIndex = (currentMobileImageIndex > 0) ? currentMobileImageIndex - 1 : mobileCarouselImages.length - 1;
            }
            updateMobileCarousel();
        }
        // Reseta as coordenadas
        startX = 0;
        endX = 0;
    });

    // Define a imagem inicial ativa para o carrossel mobile
    updateMobileCarousel();
}

// Define a imagem inicial ativa para o carrossel desktop
updateDesktopMainImage(0); // Garante que a primeira imagem esteja ativa ao carregar