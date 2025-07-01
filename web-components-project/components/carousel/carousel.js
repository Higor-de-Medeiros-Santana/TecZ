class CarouselComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/web-components-project/components/carousel/carousel.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
      <section class="slider">
        <div class="seta arrow-left"><i class="fas fa-chevron-circle-left"></i></div>
        <img src="/web-components-project/img/1.png" alt="slide-1.jpg">
        <img src="/web-components-project/img/2.png" alt="slide-2.jpg">
        <img src="/web-components-project/img/3.png" alt="slide-3.jpg">
        <img src="/web-components-project/img/4.png" alt="slide-4.jpg">
        <div class="seta arrow-right"><i class="fas fa-chevron-circle-right"></i></div>
        <div class="paginacao">
            <div class="botao"><i class="far fa-circle"></i></div>
            <div class="botao"><i class="far fa-circle"></i></div>
            <div class="botao"><i class="far fa-circle"></i></div>
            <div class="botao"><i class="far fa-circle"></i></div>
        </div>
      </section>
      <section class="info-bar">
        <div class="info-item">
            <i class="fas fa-credit-card"></i>
            <div>
                <p>Até 12 vezes</p>
                <span>sem juros</span>
            </div>
        </div>
        <div class="info-item">
            <i class="fas fa-tags"></i>
            <div>
                <p>Desc. 12% à vista</p>
                <span>no Cartão e no PIX</span>
            </div>
        </div>
        <div class="info-item">
            <i class="fas fa-barcode"></i>
            <div>
                <p>Desconto</p>
                <span>5% no boleto</span>
            </div>
        </div>
        <div class="info-item">
            <i class="fas fa-gamepad"></i>
            <div>
                <p>Pronto para</p>
                <span>sua jogatina</span>
            </div>
        </div>
        <div class="info-item">
            <i class="fas fa-tachometer-alt"></i>
            <div>
                <p>Performance</p>
                <span>Premium</span>
            </div>
        </div>
        <div class="info-item">
            <i class="fas fa-gift"></i>
            <div>
                <p>Brindes</p>
                <span>exclusivos</span>
            </div>
        </div>
      </section>
    `;
  }

  connectedCallback() {
    const sliderImgs = this.shadowRoot.querySelectorAll(".slider img");
    const sliderDots = this.shadowRoot.querySelectorAll(".slider .paginacao .botao i");
    const sliderLeftArrow = this.shadowRoot.querySelector(".slider .arrow-left");
    const sliderRightArrow = this.shadowRoot.querySelector(".slider .arrow-right");

    let currentSlideIndex = 0;
    let slideTime = 7000;
    let autoSlideInterval = null;

    const showSlide = (index) => {
      sliderImgs.forEach((img, i) => {
        img.classList.toggle("active", i === index);
        img.style.display = i === index ? "block" : "none";
      });
      sliderDots.forEach((dot, i) => {
        dot.classList.toggle("fa-circle-dot", i === index);
        dot.classList.toggle("fa-circle", i !== index);
      });
    };

    const nextSlide = () => {
      currentSlideIndex = (currentSlideIndex + 1) % sliderImgs.length;
      showSlide(currentSlideIndex);
    };

    const prevSlide = () => {
      currentSlideIndex = (currentSlideIndex - 1 + sliderImgs.length) % sliderImgs.length;
      showSlide(currentSlideIndex);
    };

    const resetAutoSlide = () => {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    };

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(nextSlide, slideTime);
    };

    
    showSlide(currentSlideIndex);
    startAutoSlide();

   
    sliderLeftArrow.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });

    sliderRightArrow.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });

    sliderDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlideIndex = index;
        showSlide(currentSlideIndex);
        resetAutoSlide();
      });
    });
  }
}

customElements.define('carousel-component', CarouselComponent);