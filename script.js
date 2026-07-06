const vacas = [
  {
    id: 1,
    nome: 'Luna',
    raca: 'Holandesa',
    idade: 3,
    peso: 560,
    leite: 32,
    preco: 7800,
    imagem: createCowIllustration('Holandesa')
  },
  {
    id: 2,
    nome: 'Margarida',
    raca: 'Jersey',
    idade: 4,
    peso: 430,
    leite: 24,
    preco: 6200,
    imagem: createCowIllustration('Jersey')
  },
  {
    id: 3,
    nome: 'Bela',
    raca: 'Nelore',
    idade: 2,
    peso: 590,
    leite: 18,
    preco: 5400,
    imagem: createCowIllustration('Nelore')
  },
  {
    id: 4,
    nome: 'Dona',
    raca: 'Gir',
    idade: 5,
    peso: 610,
    leite: 38,
    preco: 9200,
    imagem: createCowIllustration('Gir')
  },
  {
    id: 5,
    nome: 'Nuvem',
    raca: 'Angus',
    idade: 6,
    peso: 650,
    leite: 15,
    preco: 11200,
    imagem: createCowIllustration('Angus')
  },
  {
    id: 6,
    nome: 'Sol',
    raca: 'Holandesa',
    idade: 2,
    peso: 580,
    leite: 35,
    preco: 8600,
    imagem: createCowIllustration('Holandesa')
  }
];

let cart = [];
let searchTerm = '';
let selectedRace = 'Todas';
let selectedPrice = 'Todas';
let selectedMilk = 'Todas';

const searchInput = document.getElementById('searchInput');
const raceFilter = document.getElementById('raceFilter');
const priceFilter = document.getElementById('priceFilter');
const milkFilter = document.getElementById('milkFilter');
const catalogGrid = document.getElementById('catalogGrid');
const cartItems = document.getElementById('cartItems');
const cartItemsCount = document.getElementById('cartItemsCount');
const subtotalValue = document.getElementById('subtotalValue');
const totalValue = document.getElementById('totalValue');
const clearCartBtn = document.getElementById('clearCartBtn');
const cartCounter = document.querySelector('.cart-counter');
const heroImage = document.querySelector('.hero-media img');

function createCowIllustration(raca) {
  const label = raca || 'Vaca';
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <rect width="800" height="600" rx="36" fill="#e9f8ea"/>
      <rect x="0" y="360" width="800" height="240" fill="#7bc96f"/>
      <rect x="60" y="140" width="660" height="220" rx="30" fill="#f8f2e3"/>
      <circle cx="220" cy="250" r="60" fill="#ffffff"/>
      <circle cx="430" cy="250" r="60" fill="#ffffff"/>
      <rect x="160" y="210" width="210" height="140" rx="70" fill="#ffffff"/>
      <rect x="360" y="220" width="180" height="140" rx="55" fill="#ffffff"/>
      <ellipse cx="250" cy="235" rx="50" ry="70" fill="#f6e6d8"/>
      <ellipse cx="470" cy="250" rx="60" ry="80" fill="#f6e6d8"/>
      <rect x="250" y="180" width="95" height="95" rx="24" fill="#4a2c1f"/>
      <rect x="480" y="200" width="80" height="90" rx="24" fill="#4a2c1f"/>
      <circle cx="300" cy="215" r="12" fill="#0f172a"/>
      <circle cx="520" cy="235" r="12" fill="#0f172a"/>
      <rect x="280" y="280" width="50" height="70" rx="20" fill="#5b3a22"/>
      <rect x="500" y="290" width="45" height="70" rx="18" fill="#5b3a22"/>
      <rect x="100" y="420" width="200" height="80" rx="24" fill="#5d4a2d"/>
      <path d="M190 420c35-60 95-90 140-95" stroke="#8b5e3c" stroke-width="16" stroke-linecap="round" fill="none"/>
      <path d="M600 300c50-30 120-30 180 0" stroke="#3f7d20" stroke-width="20" stroke-linecap="round" fill="none"/>
      <rect x="540" y="430" width="180" height="80" rx="24" fill="#6b8e23"/>
      <text x="400" y="545" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#2f4f2f">${label}</text>
    </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function formatCurrency(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function renderCatalog() {
  const filteredVacas = getFilteredVacas();
  catalogGrid.innerHTML = '';

  if (filteredVacas.length === 0) {
    catalogGrid.innerHTML = '<div class="empty-state">Nenhuma vaca encontrada com os filtros atuais.</div>';
    return;
  }

  filteredVacas.forEach((vaca) => {
    const card = createCard(vaca);
    catalogGrid.appendChild(card);
  });
}

function createCard(vaca) {
  const article = document.createElement('article');
  article.className = 'product-card';

  article.innerHTML = `
    <img src="${vaca.imagem}" alt="${vaca.nome} - ${vaca.raca}" loading="lazy" />
    <div class="product-info">
      <div class="product-meta">
        <h3 class="product-name">${vaca.nome}</h3>
        <span class="product-badge">${vaca.raca}</span>
      </div>
      <div class="product-details">
        <span>🗓 ${vaca.idade} anos</span>
        <span>⚖️ ${vaca.peso} kg</span>
        <span>🥛 ${vaca.leite} L/dia</span>
        <span>🏡 Alta genética</span>
      </div>
      <p class="product-price">${formatCurrency(vaca.preco)}</p>
      <button class="btn btn-primary btn-card" data-id="${vaca.id}">Adicionar ao Carrinho</button>
    </div>
  `;

  article.querySelector('button').addEventListener('click', () => addToCart(vaca.id));
  return article;
}

function getFilteredVacas() {
  return vacas.filter((vaca) => {
    const matchesSearch =
      vaca.nome.toLowerCase().includes(searchTerm) || vaca.raca.toLowerCase().includes(searchTerm);

    const matchesRace = selectedRace === 'Todas' || vaca.raca === selectedRace;

    const matchesPrice =
      selectedPrice === 'Todas' ||
      (selectedPrice === 'ate5000' && vaca.preco <= 5000) ||
      (selectedPrice === '5000a10000' && vaca.preco > 5000 && vaca.preco <= 10000) ||
      (selectedPrice === 'acima10000' && vaca.preco > 10000);

    const matchesMilk =
      selectedMilk === 'Todas' ||
      (selectedMilk === 'ate20' && vaca.leite <= 20) ||
      (selectedMilk === '20a40' && vaca.leite > 20 && vaca.leite <= 40) ||
      (selectedMilk === 'acima40' && vaca.leite > 40);

    return matchesSearch && matchesRace && matchesPrice && matchesMilk;
  });
}

function addToCart(vacaId) {
  const existingItem = cart.find((item) => item.id === vacaId);
  if (existingItem) {
    existingItem.quantidade += 1;
  } else {
    cart.push({ id: vacaId, quantidade: 1 });
  }

  renderCart();
  flashCart();
}

function removeFromCart(vacaId) {
  cart = cart.filter((item) => item.id !== vacaId);
  renderCart();
}

function updateQuantity(vacaId, change) {
  const item = cart.find((entry) => entry.id === vacaId);
  if (!item) return;

  item.quantidade += change;
  if (item.quantidade <= 0) {
    removeFromCart(vacaId);
    return;
  }

  renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Seu carrinho está vazio 🛒</div>';
    updateCartCounter();
    updateSubtotal();
    updateTotal();
    return;
  }

  cartItems.innerHTML = '';

  cart.forEach((item) => {
    const vaca = vacas.find((animal) => animal.id === item.id);
    if (!vaca) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'cart-item';
    wrapper.innerHTML = `
      <div class="cart-item-details">
        <img src="${vaca.imagem}" alt="${vaca.nome}" />
        <div>
          <p class="cart-item-name">${vaca.nome}</p>
          <p class="cart-item-price">${formatCurrency(vaca.preco)} cada</p>
        </div>
      </div>
      <div class="quantity-controls">
        <button class="btn btn-secondary quantity-btn" data-action="decrease" data-id="${vaca.id}">−</button>
        <span class="quantity-value">${item.quantidade}</span>
        <button class="btn btn-secondary quantity-btn" data-action="increase" data-id="${vaca.id}">+</button>
        <button class="btn btn-danger" data-action="remove" data-id="${vaca.id}">Remover</button>
      </div>
    `;

    wrapper.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        const id = Number(button.getAttribute('data-id'));

        if (action === 'increase') {
          updateQuantity(id, 1);
        } else if (action === 'decrease') {
          updateQuantity(id, -1);
        } else if (action === 'remove') {
          removeFromCart(id);
        }
      });
    });

    cartItems.appendChild(wrapper);
  });

  updateCartCounter();
  updateSubtotal();
  updateTotal();
}

function updateCartCounter() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantidade, 0);
  cartCounter.textContent = totalItems;
  cartItemsCount.textContent = totalItems;
}

function updateSubtotal() {
  const subtotal = cart.reduce((sum, item) => {
    const vaca = vacas.find((animal) => animal.id === item.id);
    return sum + (vaca ? vaca.preco * item.quantidade : 0);
  }, 0);
  subtotalValue.textContent = formatCurrency(subtotal);
}

function updateTotal() {
  const total = cart.reduce((sum, item) => {
    const vaca = vacas.find((animal) => animal.id === item.id);
    return sum + (vaca ? vaca.preco * item.quantidade : 0);
  }, 0);
  totalValue.textContent = formatCurrency(total);
}

function searchVacas(event) {
  searchTerm = event.target.value.trim().toLowerCase();
  renderCatalog();
}

function filterVacas() {
  selectedRace = raceFilter.value;
  selectedPrice = priceFilter.value;
  selectedMilk = milkFilter.value;
  renderCatalog();
}

function clearCart() {
  cart = [];
  renderCart();
}

function flashCart() {
  const cartSection = document.querySelector('.cart-summary-card');
  cartSection.classList.remove('cart-flash');
  void cartSection.offsetWidth;
  cartSection.classList.add('cart-flash');
}

function init() {
  if (heroImage) {
    heroImage.src = createCowIllustration('Fazenda');
    heroImage.alt = 'Vacas em uma fazenda';
  }

  renderCatalog();
  renderCart();

  searchInput.addEventListener('input', searchVacas);
  raceFilter.addEventListener('change', filterVacas);
  priceFilter.addEventListener('change', filterVacas);
  milkFilter.addEventListener('change', filterVacas);
  clearCartBtn.addEventListener('click', clearCart);
}

init();
