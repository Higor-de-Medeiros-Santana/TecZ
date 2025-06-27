const mainProductImage = document.getElementById("product-main-image");
const thumbnailImageList = document.querySelectorAll(".image-list");

const mobileCarouselImages = document.querySelectorAll('.mobile-product-carousel .carousel-img');
const mobileCarouselPrevBtn = document.querySelector('.mobile-product-carousel .carousel-arrow.prev');
const mobileCarouselNextBtn = document.querySelector('.mobile-product-carousel .carousel-arrow.next');

let currentMobileImageIndex = 0;

function updateDesktopMainImage(index) {
    if (mainProductImage && thumbnailImageList.length > index) {
        mainProductImage.src = thumbnailImageList[index].src;
        thumbnailImageList.forEach(img => img.classList.remove('active-thumbnail'));
        thumbnailImageList[index].classList.add('active-thumbnail');
    }
}

function updateMobileCarousel() {
    mobileCarouselImages.forEach((img, index) => {
        if (index === currentMobileImageIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

thumbnailImageList.forEach((img, idx) => {
    img.addEventListener('click', function() {
        updateDesktopMainImage(idx);
    });
});

if (mobileCarouselImages.length > 0) {
    mobileCarouselPrevBtn.addEventListener('click', () => {
        currentMobileImageIndex = (currentMobileImageIndex > 0) ? currentMobileImageIndex - 1 : mobileCarouselImages.length - 1;
        updateMobileCarousel();
    });

    mobileCarouselNextBtn.addEventListener('click', () => {
        currentMobileImageIndex = (currentMobileImageIndex < mobileCarouselImages.length - 1) ? currentMobileImageIndex + 1 : 0;
        updateMobileCarousel();
    });

    let startX = 0;
    let endX = 0;
    const mobileCarouselContainer = document.querySelector('.mobile-product-carousel .carousel-images');

    mobileCarouselContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    mobileCarouselContainer.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    mobileCarouselContainer.addEventListener('touchend', () => {
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                currentMobileImageIndex = (currentMobileImageIndex < mobileCarouselImages.length - 1) ? currentMobileImageIndex + 1 : 0;
            } else {
                currentMobileImageIndex = (currentMobileImageIndex > 0) ? currentMobileImageIndex - 1 : mobileCarouselImages.length - 1;
            }
            updateMobileCarousel();
        }
        startX = 0;
        endX = 0;
    });

    updateMobileCarousel();
}

updateDesktopMainImage(0);