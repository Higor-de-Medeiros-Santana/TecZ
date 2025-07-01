class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/web-components-project/components/card/card.css">
      <link rel="stylesheet" href="/web-components-project/components/card/seção.css">
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
      <section class="category-section">
        <h2 class="category-title">Busque por Categoria</h2>
        <div class="category-carousel-wrapper">
          <button class="category-arrow category-arrow-left" aria-label="Categoria Anterior">&#10094;</button>
          <div class="category-container">
            <a href="#" class="category-item">
              <div class="category-image-circle">
                <img src="/web-components-project/img/notebook.webp" alt="Imagem de Notebooks">
              </div>
              <p class="category-name">Notebooks</p>
            </a>
            <a href="#" class="category-item">
              <div class="category-image-circle">
                <img src="/web-components-project/img/monitor-1.png" alt="Imagem de Monitores">
              </div>
              <p class="category-name">Monitores</p>
            </a>
            <a href="#" class="category-item">
              <div class="category-image-circle">
                <img src="/web-components-project/img/pc-gamer-completo-aquario-curvo-preto_620x620+fill_ffffff-Photoroom.png" alt="Imagem de Computadores">
              </div>
              <p class="category-name">Computadores</p>
            </a>
            <a href="#" class="category-item">
              <div class="category-image-circle">
                <img src="/web-components-project/img/headset_gamer.png" alt="Imagem de Periféricos">
              </div>
              <p class="category-name">Periféricos</p>
            </a>
          </div>
          <button class="category-arrow category-arrow-right" aria-label="Próxima Categoria">&#10095;</button>
        </div>
      </section>
      <section class="product-section">
        <h1 class="section-title">Produtos Mais Vendidos</h1>
        <div class="carousel-container" id="mais-vendidos-carousel">
          <button class="carousel-button prev">
            <i class='bx bx-chevron-left'></i>
          </button>
          <div class="product-carousel-wrapper">
            <div class="product-carousel-track">
              <a href="/web-components-project/produtos/produto1.html">
                <div class="product-card">
                  <div class="product-badge">Mais Vendido</div>
                  <div class="product-tilt-effect">
                    <div class="product-image">
                      <img src="/web-components-project/img/acer.png" alt="Monitor Gamer HQ 24">
                    </div>
                  </div>
                  <div class="product-info">
                    <div class="product-category">Notebook para jogos</div>
                    <h2 class="product-title">Notebook Gamer Acer Nitro V15</h2>
                    <div class="product-description">
                      <p>O Notebook Gamer Acer Nitro V15 Anv15-51-57ws é perfeito para quem busca alto desempenho em jogos.</p>
                    </div>
                    <div class="product-features">
                      <span class="feature">Intel® Core™ i5</span>
                      <span class="feature">512 GB SSD</span>
                      <span class="feature">Tela: 15.6” Full HD</span>
                    </div>
                    <div class="product-bottom">
                      <div class="product-price">
                        <span class="price-was">R$6.999,00</span>
                        <span class="price-now">R$5.199,00</span>
                      </div>
                      <button class="product-button">
                        <span class="button-text">Adicionar</span>
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span class="loading-spinner"></span>
                      </button>
                    </div>
                    <div class="product-meta">
                      <div class="product-rating">
                        ${'<img src="/web-components-project/img/estrela.png" alt="Estrela de avaliação" width="16" height="16" class="rating-star-img">'.repeat(5)}
                        <span class="rating-count">352 Avaliações</span>
                      </div>
                      <div class="product-stock">Em estoque</div>
                    </div>
                  </div>
                </div>
              </a>
               <a href="/web-components-project/produtos/produto9.html">
                <div class="product-card">
                  <div class="product-badge">Mais Vendido</div>
                  <div class="product-tilt-effect">
                    <div class="product-image">
                      <img src="/web-components-project/img/monitor-car.png" alt="Notebook Gamer Acer Nitro V15">
                    </div>
                  </div>
                  <div class="product-info">
                    <div class="product-category">Monitor Gamer</div>
                    <h2 class="product-title">Monitor Gamer HQ 24</h2>
                    <div class="product-description">
                      <p>O Monitor Gamer HQ 24 é perfeito para quem busca alto desempenho em jogos.</p>
                    </div>
                    <div class="product-features">
                      <span class="feature">Resolução: 1920x1080</span>
                      <span class="feature">Taxa de atualização: 144Hz</span>
                      <span class="feature">Tempo de resposta: 1ms</span>
                    </div>
                    <div class="product-bottom">
                      <div class="product-price">
                        <span class="price-was">R$ 1.510,40</span>
                        <span class="price-now">R$ 940,60</span>
                      </div>
                      <button class="product-button">
                        <span class="button-text">Comprar</span>
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span class="loading-spinner"></span>
                      </button>
                    </div>
                    <div class="product-meta">
                      <div class="product-rating">
                        ${'<img src="/web-components-project/img/estrela.png" alt="Estrela de avaliação" width="16" height="16" class="rating-star-img">'.repeat(5)}
                        <span class="rating-count">361 Avaliações</span>
                      </div>
                      <div class="product-stock">Em estoque</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/web-components-project/produtos/produto2.html">
                <div class="product-card">
                  <div class="product-badge">Mais Vendido</div>
                  <div class="product-tilt-effect">
                    <div class="product-image">
                      <img src="/web-components-project/img/mac.png" alt="Teclado Mecânico Gamer RGB">
                    </div>
                  </div>
                  <div class="product-info">
                    <div class="product-category">MacBook</div>
                    <h2 class="product-title">MacBook Air Apple 13</h2>
                    <div class="product-description">
                      <p>Desenhado sob medida para o novo chip M2, o MacBook Air une rapidez excepcional e consumo inteligente de energia.</p>
                    </div>
                    <div class="product-features">
                      <span class="feature">Apple M2</span>
                      <span class="feature">512 GB SSD</span>
                      <span class="feature">Tela: 13.3” Retina</span>
                    </div>
                    <div class="product-bottom">
                      <div class="product-price">
                        <span class="price-was">R$10.777,77</span>
                        <span class="price-now">R$9.299,00</span>
                      </div>
                      <button class="product-button">
                        <span class="button-text">Adicionar</span>
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span class="loading-spinner"></span>
                      </button>
                    </div>
                    <div class="product-meta">
                      <div class="product-rating">
                        ${'<img src="/web-components-project/img/estrela.png" alt="Estrela de avaliação" width="16" height="16" class="rating-star-img">'.repeat(4)}
                        <span class="rating-count">120 Avaliações</span>
                      </div>
                      <div class="product-stock">Em estoque</div>
                    </div>
                  </div>
                </div>
              </a>
               <a href="/web-components-project/produtos/produto7.html">
                <div class="product-card">
                  <div class="product-badge">Mais Vendido</div>
                  <div class="product-tilt-effect">
                    <div class="product-image">
                      <img src="/web-components-project/img/pc-1.png" alt="PC Gamer de Alta Performance">
                    </div>
                  </div>
                  <div class="product-info">
                    <div class="product-category">Computador Gamer</div>
                    <h2 class="product-title">PC Gamer Nível 100X Ryzen 9 9950X</h2>
                    <div class="product-description">
                      <p>O Pc Gamer Neologic Start é #GameReady, já vem montado e pronto pra jogar.</p>
                    </div>
                    <div class="product-features">
                      <span class="feature">AMD Ryzen 9 9950X</span>
                      <span class="feature">16GB DDR4</span>
                      <span class="feature">RTX 3060</span>
                    </div>
                    <div class="product-bottom">
                      <div class="product-price">
                        <span class="price-was">R$5.999,00</span>
                        <span class="price-now">R$5.079,00</span>
                      </div>
                      <button class="product-button">
                        <span class="button-text">Adicionar</span>
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span class="loading-spinner"></span>
                      </button>
                    </div>
                    <div class="product-meta">
                      <div class="product-rating">
                        ${'<img src="/web-components-project/img/estrela.png" alt="Estrela de avaliação" width="16" height="16" class="rating-star-img">'.repeat(5)}
                        <span class="rating-count">280 Avaliações</span>
                      </div>
                      <div class="product-stock">Em estoque</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <button class="carousel-button next">
            <i class='bx bx-chevron-right'></i>
          </button>
        </div>
        <div class="carousel-indicators" id="mais-vendidos-indicators"></div>
        <div class="view-all-button-container">
          <a href="/web-components-project/pages/filtro.html">
            <button class="view-all-button">Veja tudo</button>
          </a>
        </div>
      </section>
      <section class="product-section">
        <h1 class="section-title">Lançamentos</h1>
        <div class="carousel-container" id="lancamentos-carousel">
          <button class="carousel-button prev">
            <i class='bx bx-chevron-left'></i>
          </button>
          <div class="product-carousel-wrapper">
            <div class="product-carousel-track">
               <a href="/web-components-project/produtos/produto4.html">
                <div class="product-card">
                  <div class="product-badge">Lançamento</div>
                  <div class="product-tilt-effect">
                    <div class="product-image">
                      <img src="/web-components-project/img/samsung.png" alt="Mouse Gamer Ultra Leve">
                    </div>
                  </div>
                  <div class="product-info">
                    <div class="product-category">Notebook</div>
                    <h2 class="product-title">Notebook Samsung Galaxy Book 4</h2>
                    <div class="product-description">
                      <p>O Galaxy Book 4 é envolto em um corpo de metal inteiriço que pesa apenas 1,55 kg, por isso é elegante, compacto e extremamente portátil.</p>
                    </div>
                    <div class="product-features">
                      <span class="feature">Intel® Core™ i5</span>
                      <span class="feature">512 GB SSD</span>
                      <span class="feature">Tela: 15.6” Full HD</span>
                    </div>
                    <div class="product-bottom">
                      <div class="product-price">
                        <span class="price-was">R$4.299,00</span>
                        <span class="price-now">R$3.299,00</span>
                      </div>
                      <button class="product-button">
                        <span class="button-text">Adicionar</span>
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span class="loading-spinner"></span>
                      </button>
                    </div>
                    <div class="product-meta">
                      <div class="product-rating">
                        ${'<img src="/web-components-project/img/estrela.png" alt="Estrela de avaliação" width="16" height="16" class="rating-star-img">'.repeat(4)}
                        <span class="rating-count">115 Avaliações</span>
                      </div>
                      <div class="product-stock">Em estoque</div>
                    </div>
                  </div>
                </div>
              </a>
               <a href="/web-components-project/produtos/produto6.html">
                <div class="product-card">
                  <div class="product-badge">Lançamento</div>
                  <div class="product-tilt-effect">
                    <div class="product-image">
                      <img src="/web-components-project/img/monitor-2.png" alt="Monitor Gamer PCFort T2701">
                    </div>
                  </div>
                  <div class="product-info">
                    <div class="product-category">Monitor Gamer</div>
                    <h2 class="product-title">Monitor Gamer PCFort T2701</h2>
                    <div class="product-description">
                      <p>O mais novo Monitor Gamer PCFort T2701-165 é a melhor escolha para seus games!</p>
                    </div>
                    <div class="product-features">
                      <span class="feature">165Hz</span>
                      <span class="feature">VESA 75mm</span>
                      <span class="feature">FullHD de 1920x1080</span>
                    </div>
                    <div class="product-bottom">
                      <div class="product-price">
                        <span class="price-was">R$1.350,00</span>
                        <span class="price-now">R$1.026,00</span>
                      </div>
                      <button class="product-button">
                        <span class="button-text">Comprar</span>
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span class="loading-spinner"></span>
                      </button>
                    </div>
                    <div class="product-meta">
                      <div class="product-rating">
                        ${'<img src="/web-components-project/img/estrela.png" alt="Estrela de avaliação" width="16" height="16" class="rating-star-img">'.repeat(5)}
                        <span class="rating-count">50 Avaliações</span>
                      </div>
                      <div class="product-stock">Em estoque</div>
                    </div>
                  </div>
                </div>
              </a>
               <a href="/web-components-project/produtos/produto5.html">
                <div class="product-card">
                  <div class="product-badge">Lançamento</div>
                  <div class="product-tilt-effect">
                    <div class="product-image">
                      <img src="/web-components-project/img/monitor-1.png" alt="Monitor-2">
                    </div>
                  </div>
                  <div class="product-info">
                    <div class="product-category">Monitor Gamer</div>
                    <h2 class="product-title">Monitor Gamer 32</h2>
                    <div class="product-description">
                      <p>Monitor Gamer Curvo de 32" com 1500R, 165Hz e 1ms de resposta, possui painel VA ultrafino e resolução Full HD.</p>
                    </div>
                    <div class="product-features">
                      <span class="feature">32 polegadas</span>
                      <span class="feature">165Hz</span>
                      <span class="feature">FullHD de 1920x1080</span>
                    </div>
                    <div class="product-bottom">
                      <div class="product-price">
                        <span class="price-was">R$2.000,00</span>
                        <span class="price-now">R$1.802,00</span>
                      </div>
                      <button class="product-button">
                        <span class="button-text">Adicionar</span>
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span class="loading-spinner"></span>
                      </button>
                    </div>
                    <div class="product-meta">
                      <div class="product-rating">
                        ${'<img src="/web-components-project/img/estrela.png" alt="Estrela de avaliação" width="16" height="16" class="rating-star-img">'.repeat(5)}
                        <span class="rating-count">90 Avaliações</span>
                      </div>
                      <div class="product-stock">Em estoque</div>
                    </div>
                  </div>
                </div>
              </a>
               <a href="/web-components-project/produtos/produto3.html">
                <div class="product-card">
                  <div class="product-badge">Lançamento</div>
                  <div class="product-tilt-effect">
                    <div class="product-image">
                      <img src="/web-components-project/img/teclado.png" alt="Teclado Mecânico Gamer RGB">
                    </div>
                  </div>
                  <div class="product-info">
                    <div class="product-category">Periférico</div>
                    <h2 class="product-title">Teclado Mecânico Gamer RGB HyperX</h2>
                    <div class="product-description">
                      <p>Teclado mecânico com iluminação RGB personalizável, switches de alta durabilidade e tempo de resposta ultra-rápido para gamers.</p>
                    </div>
                    <div class="product-features">
                      <span class="feature">Switches Mecânicos</span>
                      <span class="feature">Iluminação RGB</span>
                      <span class="feature">Anti-ghosting</span>
                    </div>
                    <div class="product-bottom">
                      <div class="product-price">
                        <span class="price-was">R$ 899,00</span>
                        <span class="price-now">R$ 679,00</span>
                      </div>
                      <button class="product-button">
                        <span class="button-text">Adicionar</span>
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span class="loading-spinner"></span>
                      </button>
                    </div>
                    <div class="product-meta">
                      <div class="product-rating">
                        ${'<img src="/web-components-project/img/estrela.png" alt="Estrela de avaliação" width="16" height="16" class="rating-star-img">'.repeat(4)}
                        <img src="/web-components-project/img/estrela.png" alt="Estrela de avaliação vazia" width="16" height="16" class="rating-star-img">
                        <span class="rating-count">195 Avaliações</span>
                      </div>
                      <div class="product-stock">Em estoque</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <button class="carousel-button next">
            <i class='bx bx-chevron-right'></i>
          </button>
        </div>
        <div class="carousel-indicators" id="lancamentos-indicators"></div>
        <div class="view-all-button-container">
          <a href="/web-components-project/pages/filtro.html">
            <button class="view-all-button">Veja tudo</button>
          </a>
        </div>
      </section>
    `;
    setTimeout(() => {
      const shadow = this.shadowRoot;

      // --- Lógica do Carrossel de Categorias (inalterada) ---
      const categoryContainer = shadow.querySelector('.category-container');
      const categoryArrowLeft = shadow.querySelector('.category-section .category-arrow-left');
      const categoryArrowRight = shadow.querySelector('.category-section .category-arrow-right');
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
      }
      // --- Fim da Lógica do Carrossel de Categorias ---

      const carouselContainers = shadow.querySelectorAll('.carousel-container');
      carouselContainers.forEach(container => {
        const carouselTrack = container.querySelector('.product-carousel-track');
        const productCards = Array.from(carouselTrack.querySelectorAll('.product-card'));
        const prevButton = container.querySelector('.carousel-button.prev');
        const nextButton = container.querySelector('.carousel-button.next');
        const indicatorsContainer = shadow.querySelector(`#${container.id.replace('-carousel', '-indicators')}`);

        let currentIndex = 0;
        const totalCards = productCards.length;
        let cardsInView = 1; // Quantidade de cards visíveis de uma vez

        if (totalCards === 0) {
          container.style.display = 'none';
          return;
        }

        // Função para verificar se está em mobile
        function isMobile() {
          return window.matchMedia("(max-width: 768px)").matches;
        }

        // Calcula quantos cards cabem na tela
        function calculateCardsInView() {
          if (productCards.length === 0) return 1;

          if (isMobile()) {
            cardsInView = 1; // Sempre 1 card visível por vez em mobile
          } else {
            cardsInView = 3; // Em desktop, assume 3 cards por linha
          }
           if (cardsInView > totalCards) cardsInView = totalCards;
        }

        function createIndicators() {
          if (!indicatorsContainer) return;

          if (!isMobile()) {
            indicatorsContainer.innerHTML = '';
            indicatorsContainer.style.display = 'none';
            return;
          }

          indicatorsContainer.innerHTML = '';
          const totalPages = totalCards; // Um indicador por card
          for (let i = 0; i < totalPages; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === currentIndex) {
              indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
              currentIndex = i;
              scrollToCurrent();
              updateIndicators();
            });
            indicatorsContainer.appendChild(indicator);
          }
          indicatorsContainer.style.display = 'flex';
        }

        function updateIndicators() {
          if (!indicatorsContainer || !isMobile()) return;
          const indicators = indicatorsContainer.querySelectorAll('.indicator');
          indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === currentIndex);
          });
        }

        function scrollToCurrent() {
          if (totalCards === 0) return;

          if (!isMobile()) {
            carouselTrack.style.transform = `translateX(0px)`;
            if (prevButton) prevButton.style.display = 'none';
            if (nextButton) nextButton.style.display = 'none';
            if (indicatorsContainer) indicatorsContainer.style.display = 'none';
            return;
          }

          // Pega a largura do card E as margens laterais do card
          const cardStyle = window.getComputedStyle(productCards[0]);
          const cardWidth = productCards[0].offsetWidth;
          const cardMarginLeft = parseFloat(cardStyle.marginLeft);
          const cardMarginRight = parseFloat(cardStyle.marginRight);
          const totalCardWidth = cardWidth + cardMarginLeft + cardMarginRight; // Largura total com as margens

          // Calcula o offset para centralizar o card atual
          // Pega a largura visível do container do carrossel (product-carousel-wrapper)
          const wrapperWidth = carouselTrack.parentElement.offsetWidth;
          let offset = -(currentIndex * totalCardWidth) + (wrapperWidth / 2) - (totalCardWidth / 2);

          // Limita o offset para não ir além dos limites do carrossel
          const maxOffset = -(totalCards * totalCardWidth - wrapperWidth);
          if (maxOffset > 0) offset = 0;
          else if (offset < maxOffset) offset = maxOffset;
          if (offset > 0) offset = 0;

          carouselTrack.style.transition = 'transform 0.3s ease-in-out'; // Velocidade da transição aumentada
          carouselTrack.style.transform = `translateX(${offset}px)`;

          if (prevButton) prevButton.style.display = 'flex';
          if (nextButton) nextButton.style.display = 'flex';
          if (indicatorsContainer) indicatorsContainer.style.display = 'flex';


          if (prevButton) prevButton.disabled = currentIndex === 0;
          if (nextButton) nextButton.disabled = currentIndex === totalCards - 1;
        }

        if (prevButton) {
          prevButton.addEventListener('click', () => {
            currentIndex = Math.max(0, currentIndex - 1);
            scrollToCurrent();
            updateIndicators();
          });
        }
        if (nextButton) {
          nextButton.addEventListener('click', () => {
            currentIndex = Math.min(totalCards - 1, currentIndex + 1);
            scrollToCurrent();
            updateIndicators();
          });
        }

        // Atualiza o carrossel ao redimensionar a janela
        window.addEventListener('resize', () => {
          calculateCardsInView();
          createIndicators();
          scrollToCurrent();
          updateIndicators();
        });

        // Inicializa o carrossel
        calculateCardsInView();
        createIndicators();
        scrollToCurrent();
        updateIndicators();
      });
    }, 0);
  }
}
customElements.define('card-component', CardComponent);