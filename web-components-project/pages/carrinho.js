// Dados de exemplo (pode ser carregado de backend)
let cart = [
  {
    id: 1,
    title: "Iphone 15 Apple, 128GB, Quadriband, 6,1 Polegadas, Preto – Mtp03br/a",
    desc: "Apple",
    image: "/web-components-project/img/PCM-Pichau-Gamer1 copy.png",
    pricePix: 4319.10,
    price: 4746.26,
    qty: 1
  }
];
let couponDiscount = 0; // 0 = sem cupom, 0.1 = 10%
let couponUsed = "";

function renderCart() {
  const productsDiv = document.getElementById("cart-products");
  if (cart.length === 0) {
    productsDiv.innerHTML = `
      <div style="text-align:center; padding:36px">
        Carrinho vazio!
      </div>
    `;
    document.getElementById("summary-card").innerHTML = "";
    return;
  }
  let html = `
    <button class="remove-all-btn" onclick="removeAll()">REMOVER TODOS OS PRODUTOS</button>
  `;
  for (let product of cart) {
    html += `
      <div class="cart-product">
        <img src="${product.image}" alt="${product.title}">
        <div class="product-info">
          <div class="product-desc">${product.desc}</div>
          <div class="product-title">${product.title}</div>
          <div class="product-prices">
            Com desconto no PIX: <span style="color:#005c36; font-weight:bold;">R$ ${format(product.pricePix)}</span><br>
            Parcelado sem juros: <span style="color:#222">R$ ${format(product.price)}</span>
          </div>
          <div class="ninja-offer">🔥 OFERTA JUNINA</div>
        </div>
        <div class="quantity-control">
          <button class="quantity-btn" onclick="changeQty(${product.id},-1)">-</button>
          <span>${product.qty}</span>
          <button class="quantity-btn" onclick="changeQty(${product.id},1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeItem(${product.id})">REMOVER</button>
      </div>
    `;
  }
  productsDiv.innerHTML = html;
  renderSummary();
}

function renderSummary() {
  let total = 0, totalPix = 0, qty = 0;
  for (let item of cart) {
    total += item.price * item.qty;
    totalPix += item.pricePix * item.qty;
    qty += item.qty;
  }
  let discount = couponDiscount ? totalPix * couponDiscount : 0;
  let valorPixDesc = totalPix - discount;
  let summary = `
    <div class="summary-row">
      <span class="summary-label">Valor dos Produtos:</span>
      <span class="summary-value">R$ ${format(total)}</span>
    </div>
    <div class="summary-row">
      <span class="summary-label">Total a prazo:</span>
      <span class="summary-value">R$ ${format(total)}</span>
    </div>
    <div class="summary-pix">
      <span>Valor à vista no PIX:</span>
      <span>R$ ${format(valorPixDesc)}</span>
    </div>
    <div class="summary-economy">
      (Economize: R$ ${format(total - valorPixDesc)})
    </div>
  `;
  document.getElementById("summary-card").innerHTML = summary;
}

function format(n) {
  return n.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function changeQty(id, delta) {
  let product = cart.find(p => p.id === id);
  if (!product) return;
  product.qty += delta;
  if (product.qty < 1) product.qty = 1;
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(p => p.id !== id);
  renderCart();
}

function removeAll() {
  cart = [];
  renderCart();
}

function applyCoupon() {
  const input = document.getElementById("coupon");
  if (input.value.trim().toUpperCase() === "TECHZ10") {
    couponDiscount = 0.10;
    couponUsed = "TECHZ10";
    alert("Cupom aplicado! 10% OFF no valor à vista no PIX.");
  } else {
    couponDiscount = 0;
    couponUsed = "";
    alert("Cupom inválido.");
  }
  renderSummary();
}

// Inicializa o carrinho ao carregar
window.onload = renderCart;