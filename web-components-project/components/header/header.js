class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/header/header.css">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

      <header>
        <div class="header-left">
          <a href="#" class="logo">TECHZONE</a>
        </div>

        <div class="header-center">
          <form action="/pesquisa" method="get" class="search-wrapper">
            <label for="barra-pesquisa" class="sr-only">Pesquisar</label>
            <input type="search" id="barra-pesquisa" name="q" placeholder="O que procura hoje?">
            <button type="submit" class="search-submit-icon" aria-label="Pesquisar">
              <i class='bx bx-search'></i>
            </button>
          </form>
        </div>

        <div class="header-right">
          <div class="icons">
            <a href="/web-components-project/pages/login.html">
              <i class='bx bx-user'></i><span>Entrar/ Criar conta</span>
            </a>
            <a href="/web-components-project/pages/carrinho.html">
              <i class='bx bx-cart'></i><span>Carrinho</span>
            </a>
            <div id="menu-icon" class="bx bx-menu" aria-label="Abrir menu mobile"></div>
          </div>
        </div>
      </header>

      <div id="offcanvas-menu" class="offcanvas">
        <div class="offcanvas-header">
          <div class="logo">TECHZONE</div>
          <button id="close-menu" class="btn-close" aria-label="Fechar menu">✕</button>
        </div>
        <nav class="offcanvas-nav">
          <ul>
            <li><a href="/login teste/login2.html"><i class='bx bx-user'></i><span>Entrar / Criar conta</span></a></li>
            <li><a href="carrinho.html"><i class='bx bx-cart'></i><span>Carrinho</span></a></li>
            <li class="separator"><hr></li>
            <li><a href="#"><i class='bx bx-grid-alt'></i><span>Produtos</span></a></li>
            <li><a href="#"><i class='bx bx-tag'></i><span>Ofertas</span></a></li>
            <li><a href="#"><i class='bx bx-desktop'></i><span>Monitores</span></a></li>
          </ul>
        </nav>
      </div>
    `;
  }

  connectedCallback() {
    const menuIcon = this.shadowRoot.querySelector('#menu-icon');
    const offcanvasMenu = this.shadowRoot.querySelector('#offcanvas-menu');
    const closeMenuBtn = this.shadowRoot.querySelector('#close-menu');

    menuIcon.addEventListener('click', () => {
      offcanvasMenu.classList.add('show');
    });

    closeMenuBtn.addEventListener('click', () => {
      offcanvasMenu.classList.remove('show');
    });
  }
}

customElements.define('header-component', HeaderComponent);