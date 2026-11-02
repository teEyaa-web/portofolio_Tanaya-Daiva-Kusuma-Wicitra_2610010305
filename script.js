/**
 * IT SOLUTION - KOPERASI KAMPUS
 * Front-end Logic: Product Filtering, Search, Sorting, Mini Cart Estimator,
 * Live Operational Status, Interactive Reviews with LocalStorage, Modal Dialogs & Toast.
 */

// =============================================================================
// 1. DATA PRODUK & LAYANAN (Sesuai Papan Harga Resmi IT Solution)
// =============================================================================
const products = [
  // --- Minuman ---
  {
    id: "m-01",
    name: "Ichitan Thai Tea",
    price: 9000,
    category: "minuman",
    meta: "Botol dingin 310ml",
    image: "assets/thai.jpg"
  },
  {
    id: "m-02",
    name: "Good Day",
    price: 7000,
    category: "minuman",
    meta: "Kopi susu siap minum 250ml",
    image: "assets/goodday.jpg"
  },
  {
    id: "m-03",
    name: "Prof",
    price: 4000,
    category: "minuman",
    meta: "Minuman air mineral",
    image: "assets/prof.jpg"
  },
  {
    id: "m-04",
    name: "Kopi ABC Susu",
    price: 4000,
    category: "minuman",
    meta: "Kopi mantap penangkal kantuk",
    image: "assets/abc.jpg"
  },
  {
    id: "m-05",
    name: "Milku",
    price: 4000,
    category: "minuman",
    meta: "Susu aneka rasa menyegarkan",
    image: "assets/milku.jpg"
  },
  {
    id: "m-06",
    name: "Floridina ",
    price: 5000,
    category: "minuman",
    meta: "Jus jeruk segar dengan bulir",
    image: "assets/floridina.jpg"
  },
  {
    id: "m-07",
    name: "Teh Pucuk Harum",
    price: 5000,
    category: "minuman",
    meta: "Teh melati manis segar 350ml",
    image: "assets/pucuk.jpg"
  },
  {
    id: "m-08",
    name: "Golda Coffee Latte",
    price: 4000,
    category: "minuman",
    meta: "Kopi creamy aroma mantap",
    image: "assets/golda.jpg"
  },
  {
    id: "m-09",
    name: "Ultra Milk UHT",
    price: 9000,
    category: "minuman",
    meta: "Susu murni cokelat/putih 250ml",
    image: "assets/ultramilk.jpg"
  },
  {
    id: "m-10",
    name: "Pocari Sweat",
    price: 7000,
    category: "minuman",
    meta: "Pengganti ion tubuh 350ml",
    image: "assets/pocari.jpg"
  },

  // --- Makanan & Snack ---
  {
    id: "f-01",
    name: "Nextar Choco Brownies",
    price: 3000,
    category: "makanan",
    meta: "Cookies lembut isi cokelat lumer",
    image: "assets/nextar.jpg"
  },
  {
    id: "f-02",
    name: "Choco Pie Marshmallow",
    price: 3000,
    category: "makanan",
    meta: "Kue cokelat lembut isi krim",
    image: "assets/chocopie.jpg"
  },
  {
    id: "f-03",
    name: "Kalpa Wafer Kelapa Cokelat",
    price: 3000,
    category: "makanan",
    meta: "Wafer renyah tabur kelapa gurih",
    image: "assets/kalpa.jpg"
  },
  {
    id: "f-04",
    name: "Beng-Beng",
    price: 3000,
    category: "makanan",
    meta: "Wafer karamel cokelat crispy",
    image: "assets/bengbeng.jpg"
  },
  {
    id: "f-05",
    name: "Siip Keju",
    price: 1000,
    category: "makanan",
    meta: "Snack ekstrudat rasa gurih",
    image: "assets/siip.jpg"
  },
  {
    id: "f-06",
    name: "Triks Potato Crisps",
    price: 1000,
    category: "makanan",
    meta: "Keripik kentang panggang renyah",
    image: "assets/tricks.jpg"
  },

  // --- ATK ---
  {
    id: "a-01",
    name: "Tisu Pocket Kecil",
    price: 2000,
    category: "atk",
    meta: "Tisu praktis saku higienis",
    image: "assets/tisu kecil.jpg"
  },
  {
    id: "a-02",
    name: "Tisu Pack Besar",
    price: 4000,
    category: "atk",
    meta: "Tisu wajah lembut serbaguna",
    image: "assets/tisu gede.jpg"
  },
  {
    id: "a-03",
    name: "Tip-Ex Merah",
    price: 5000,
    category: "atk",
    meta: "Correction tape praktis cepat",
    image: "assets/merah.jpg"
  },
  {
    id: "a-04",
    name: "Tip-Ex Biru",
    price: 7000,
    category: "atk",
    meta: "Pita koreksi panjang & presisi",
    image: "assets/biru.jpg"
  },
  {
    id: "a-05",
    name: "Peniti Set",
    price: 2000,
    category: "atk",
    meta: "Keperluan jas almamater / hijab",
    image: "assets/peniti.jpg"
  },
  {
    id: "a-06",
    name: "Pulpen Gel Tinta Hitam",
    price: 3000,
    category: "atk",
    meta: "Nyaman untuk ujian & tugas",
    image: "assets/pulpen.jpg"
  },

  // --- Jasa Layanan ---
  {
    id: "a-07",
    name: "Jilid",
    price: 2000,
    category: "jasa",
    meta: "Termasuk cover mika & buffalo",
    image: "assets/jilid.jpg"
  },
  {
    id: "a-08",
    name: "Print Stiker",
    price: 3000,
    category: "jasa",
    meta: "Per lembar A4 warna tajam",
    image: "assets/stiker.jpg"
  },
  {
    id: "a-09",
    name: "Print / FC Hitam Putih (B/W)",
    price: 500,
    category: "jasa",
    meta: "Per lembar HVS 70/80gsm",
    image: "assets/bnw.jpg"
  },
  {
    id: "a-10",
    name: "Print / FC Warna",
    price: 1000,
    category: "jasa",
    meta: "Per lembar teks & gambar tajam",
    image: "assets/warna.jpg"
  },
  {
    id: "a-11",
    name: "Print Amplop",
    price: 1000,
    category: "jasa",
    meta: "Cetak kop amplop surat kegiatan",
    image: "assets/amplop.jpg"
  },
  {
    id: "a-12",
    name: "Print Sertifikat",
    price: 3000,
    category: "jasa",
    meta: "Kertas linen/concorde tebal A4",
    image: "assets/sertif.jpg"
  },

  // --- BREWASA ---
  {
    id: "b-01",
    name: "Americano",
    price: 10000,
    category: "Brewasa",
    meta: "Kopi hitam Brewasa",
    image: "assets/americano.jpg"
  },
  {
    id: "b-02",
    name: "Americano Peach",
    price: 15000,
    category: "Brewasa",
    meta: "Americano rasa peach",
    image: "assets/peach.jpg"
  },
  {
    id: "b-04",
    name: "Cafe Latte",
    price: 12000,
    category: "rewasa",
    meta: "Kopi susu",
    image: "assets/cafe.jpg"
  },
  {
    id: "b-05",
    name: "Butterscotch",
    price: 15000,
    category: "Brewasa",
    meta: "Kopi susu butterscotch",
    image: "assets/butters.jpg"
  },
  {
    id: "b-06",
    name: "Hazelnut",
    price: 15000,
    category: "Brewasa",
    meta: "Kopi susu hazelnut",
    image: "assets/hazelnut.jpg"
  },
  {
    id: "b-07",
    name: "Caramel",
    price: 15000,
    category: "Brewasa",
    meta: "Kopi susu caramel",
    image: "assets/caramel.jpg"
  },
  {
    id: "b-08",
    name: "Aren Latte",
    price: 15000,
    category: "Brewasa",
    meta: "Kopi susu gula aren",
    image: "assets/aren.jpg"
  },
  {
    id: "b-09",
    name: "Matcha Latte",
    price: 20000,
    category: "Brewasa",
    meta: "Matcha latte",
    image: "assets/matcha.jpg"
  },
  {
    id: "b-10",
    name: "Coklat",
    price: 20000,
    category: "Brewasa",
    meta: "Minuman coklat",
    image: "assets/coklat.jpg"
  },
  {
    id: "b-11",
    name: "Extra Shot Espresso",
    price: 3000,
    category: "Brewasa",
    meta: "Tambahan espresso",
    image: "assets/esprsso.jpg"
  },
  {
    id: "b-12",
    name: "Extra Syrup",
    price: 3000,
    category: "Brewasa",
    meta: "Peach, butterscotch, aren, caramel, hazelnut",
    image: "assets/sirup.jpg"
  }

];

// Helper: Rupiah Currency Formatter
const formatRupiah = (val) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(val).replace(/\s+/g, "");
};

// Category dictionary for display
const categoryLabels = {
  minuman: "Minuman Segar",
  makanan: "Snack & Makanan",
  atk: "ATK",
  jasa: "Jasa Layanan",
  brewasa: "Brewasa"

};

// =============================================================================
// 2. STATE MANAGEMENT
// =============================================================================
let activeCategory = "all";
let searchKeyword = "";
let currentSort = "default";
let cartItems = []; // Array of { id, name, price, qty }

// Reviews Data (initialized from localStorage or default list)
const defaultReviews = [
  {
    id: "rev-1",
    name: "Dimas Arya Pratama",
    role: "Mahasiswa Teknik",
    rating: 5,
    text: "Sangat menolong pas deadline tugas mendadak! Print warna kilat cuma 1.000 dan jilidnya rapi banget. Nggak perlu lari keluar kampus.",
    date: "Kemarin",
    likes: 12
  },
  {
    id: "rev-2",
    name: "Nabila Zahra",
    role: "Mahasiswa Manajemen",
    rating: 5,
    text: "Pilihan minuman dinginnya lengkap, harganya persis di minimarket luar bahkan ada yang lebih murah. Kasirnya juga ramah!",
    date: "3 hari lalu",
    likes: 8
  },
  {
    id: "rev-3",
    name: "Rian Hidayat",
    role: "Mahasiswa Informatika",
    rating: 5,
    text: "Paling suka beli kopi good day dingin sama choco pie sebelum masuk lab praktikum. Tempatnya bersih dan strategis banget.",
    date: "1 minggu lalu",
    likes: 5
  },
  {
    id: "rev-4",
    name: "Bu Siti Rahayu",
    role: "Staf Akademik",
    rating: 5,
    text: "Sering beli ATK darurat dan amplop dinas di sini. Sangat membantu kegiatan perkuliahan sehari-hari.",
    date: "2 minggu lalu",
    likes: 4
  },
  {
    id: "rev-5",
    name: "Alifia Nurul",
    role: "Mahasiswa Desain",
    rating: 4,
    text: "Hasil cetak stiker dan sertifikat cukup tajam dengan harga 3.000. Recomended banget buat kepanitiaan acara kampus.",
    date: "3 minggu lalu",
    likes: 7
  }
];

let reviewsData = [];
try {
  const savedReviews = localStorage.getItem("it_solution_koperasi_reviews");
  reviewsData = savedReviews ? JSON.parse(savedReviews) : defaultReviews;
} catch (e) {
  reviewsData = defaultReviews;
}

// Track liked review IDs in session
let likedReviews = new Set();
try {
  const savedLikes = localStorage.getItem("it_solution_koperasi_likes");
  if (savedLikes) likedReviews = new Set(JSON.parse(savedLikes));
} catch (e) { }

// Load Cart from localStorage if exists
try {
  const savedCart = localStorage.getItem("it_solution_koperasi_cart");
  if (savedCart) cartItems = JSON.parse(savedCart);
} catch (e) {
  cartItems = [];
}

// =============================================================================
// 3. TOAST NOTIFICATION UTILITY
// =============================================================================
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === "success" ? "✓" : "ℹ"}</span>
    <span class="toast-msg">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Auto dismiss after 3.2s
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}

// =============================================================================
// 4. MENU & PRODUCT CATALOG LOGIC
// =============================================================================
const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const sortSelect = document.getElementById("sortSelect");
const filterTabs = document.getElementById("filterTabs");

function updateCategoryCounts() {
  const countAll = products.length;
  const countMinuman = products.filter(p => p.category === "minuman").length;
  const countMakanan = products.filter(p => p.category === "makanan").length;
  const countAtk = products.filter(p => p.category === "atk").length;
  const countJasa = products.filter(p => p.category === "jasa").length;
  const countBrewasa = products.filter(p => p.category === "Brewasa").length;

  document.getElementById("countAll").textContent = countAll;
  document.getElementById("countMinuman").textContent = countMinuman;
  document.getElementById("countMakanan").textContent = countMakanan;
  document.getElementById("countAtk").textContent = countAtk;
  document.getElementById("countJasa").textContent = countJasa;
  document.getElementById("countBrewasa").textContent = countBrewasa;
}

function getFilteredProducts() {
  let list = products.filter(product => {
    const matchCat = activeCategory === "all" || product.category === activeCategory;
    const matchQuery = product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      product.meta.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchCat && matchQuery;
  });

  // Sorting
  if (currentSort === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSort === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  return list;
}

function renderMenuGrid() {
  const visibleList = getFilteredProducts();

  if (visibleList.length === 0) {
    menuGrid.innerHTML = `
      <div class="empty-menu-box">
        <div class="empty-menu-icon">🔍</div>
        <h4 class="empty-menu-title">Produk tidak ditemukan</h4>
        <p class="empty-menu-text">Tidak ada item yang cocok dengan pencarian "<strong>${escapeHtml(searchKeyword)}</strong>". Coba kata kunci lain atau pilih kategori Semua.</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = visibleList.map(item => `
    <article class="product-card" data-id="${item.id}">
      <div class="product-thumb-box">
        <img src="${item.image}" alt="${escapeHtml(item.name)}" class="product-img" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80';">
        <span class="category-badge">${categoryLabels[item.category] || "Koperasi"}</span>
      </div>
      <div class="product-body">
        <h3 class="product-name">${escapeHtml(item.name)}</h3>
        <p class="product-meta">${escapeHtml(item.meta)}</p>
        <div class="product-footer">
          <div class="product-price">${formatRupiah(item.price)}</div>
          <button class="btn-add-cart" data-id="${item.id}" aria-label="Tambah ${escapeHtml(item.name)} ke catatan belanja">
            <span>+</span> Estimasi
          </button>
        </div>
      </div>
    </article>
  `).join("");

  // Attach click listener for "+ Estimasi" buttons
  menuGrid.querySelectorAll(".btn-add-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      addToCart(id);
    });
  });
}

// Filter Tab Click Handlers
if (filterTabs) {
  filterTabs.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      filterTabs.querySelectorAll(".filter-btn").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      activeCategory = btn.dataset.filter;
      renderMenuGrid();
    });
  });
}

// Search Input Listener with Debounce
let searchTimeout;
if (menuSearch) {
  menuSearch.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchKeyword = e.target.value.trim();
      clearSearchBtn.style.display = searchKeyword.length > 0 ? "block" : "none";
      renderMenuGrid();
    }, 180);
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener("click", () => {
    menuSearch.value = "";
    searchKeyword = "";
    clearSearchBtn.style.display = "none";
    menuSearch.focus();
    renderMenuGrid();
  });
}

// Sort Select Listener
if (sortSelect) {
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderMenuGrid();
  });
}

// =============================================================================
// 5. MINI CART / ESTIMASI BELANJA DRAWER
// =============================================================================
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartTriggerBtn = document.getElementById("cartTriggerBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartBadgeCount = document.getElementById("cartBadgeCount");
const cartItemsList = document.getElementById("cartItemsList");
const cartTotalDisplay = document.getElementById("cartTotalDisplay");
const btnClearCart = document.getElementById("btnClearCart");
const btnShareCartWA = document.getElementById("btnShareCartWA");

function saveCart() {
  try {
    localStorage.setItem("it_solution_koperasi_cart", JSON.stringify(cartItems));
  } catch (e) { }
}

function updateCartUI() {
  const totalCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  // Badge count
  if (cartBadgeCount) {
    cartBadgeCount.textContent = totalCount;
    cartBadgeCount.style.display = totalCount > 0 ? "grid" : "none";
  }

  // Total price
  if (cartTotalDisplay) {
    cartTotalDisplay.textContent = formatRupiah(totalPrice);
  }

  // Items List
  if (cartItemsList) {
    if (cartItems.length === 0) {
      cartItemsList.innerHTML = `
        <div class="empty-cart-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <p>Belum ada produk dalam catatan estimasi.</p>
          <small>Pilih produk favoritmu di menu lalu klik <strong>+ Estimasi</strong>.</small>
        </div>
      `;
    } else {
      cartItemsList.innerHTML = cartItems.map(item => `
        <div class="cart-item-row" data-id="${item.id}">
          <div class="cart-item-info">
            <div class="cart-item-name">${escapeHtml(item.name)}</div>
            <div class="cart-item-price">${formatRupiah(item.price)} × ${item.qty} = ${formatRupiah(item.price * item.qty)}</div>
          </div>
          <div class="cart-qty-controls">
            <button class="btn-qty btn-qty-minus" data-id="${item.id}" aria-label="Kurangi jumlah">−</button>
            <span class="cart-item-qty">${item.qty}</span>
            <button class="btn-qty btn-qty-plus" data-id="${item.id}" aria-label="Tambah jumlah">+</button>
          </div>
        </div>
      `).join("");

      // Qty button handlers
      cartItemsList.querySelectorAll(".btn-qty-minus").forEach(btn => {
        btn.addEventListener("click", () => {
          changeQty(btn.dataset.id, -1);
        });
      });

      cartItemsList.querySelectorAll(".btn-qty-plus").forEach(btn => {
        btn.addEventListener("click", () => {
          changeQty(btn.dataset.id, 1);
        });
      });
    }
  }

  // WhatsApp Share Message Link
  if (btnShareCartWA) {
    if (cartItems.length === 0) {
      btnShareCartWA.href = "#";
      btnShareCartWA.style.opacity = "0.5";
      btnShareCartWA.style.pointerEvents = "none";
    } else {
      btnShareCartWA.style.opacity = "1";
      btnShareCartWA.style.pointerEvents = "auto";
      let waText = `Halo Admin IT Solution Koperasi, saya ingin memesan/cek ketersediaan:%0A%0A`;
      cartItems.forEach((ci, idx) => {
        waText += `${idx + 1}. ${ci.name} (${ci.qty}x) - ${formatRupiah(ci.price * ci.qty)}%0A`;
      });
      waText += `%0A*Total Estimasi:* ${formatRupiah(totalPrice)}%0A%0ATerima kasih!`;
      btnShareCartWA.href = `https://wa.me/6281234567890?text=${waText}`;
    }
  }

  saveCart();
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cartItems.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1
    });
  }

  updateCartUI();
  showToast(`"${product.name}" ditambahkan ke estimasi belanja!`);
}

function changeQty(productId, delta) {
  const itemIndex = cartItems.findIndex(i => i.id === productId);
  if (itemIndex > -1) {
    cartItems[itemIndex].qty += delta;
    if (cartItems[itemIndex].qty <= 0) {
      cartItems.splice(itemIndex, 1);
    }
    updateCartUI();
  }
}

function openCart() {
  if (cartOverlay) {
    cartOverlay.classList.add("active");
    cartOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function closeCart() {
  if (cartOverlay) {
    cartOverlay.classList.remove("active");
    cartOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

if (cartTriggerBtn) cartTriggerBtn.addEventListener("click", openCart);
if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);

if (cartOverlay) {
  cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) closeCart();
  });
}

if (btnClearCart) {
  btnClearCart.addEventListener("click", () => {
    if (cartItems.length === 0) return;
    if (confirm("Kosongkan semua daftar estimasi belanja?")) {
      cartItems = [];
      updateCartUI();
      showToast("Daftar estimasi belanja dikosongkan.", "info");
    }
  });
}

// =============================================================================
// 6. OPERATIONAL STATUS CHECKER (Senin-Jumat 07.30 - 17.00 WIB)
// =============================================================================
function checkOperationalStatus() {
  const statusPing = document.getElementById("statusPing");
  const statusTitle = document.getElementById("statusTitle");
  const statusDetail = document.getElementById("statusDetail");

  if (!statusPing || !statusTitle) return;

  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  const openTime = 7 * 60 + 30; // 07:30
  const closeTime = 17 * 60;    // 17:00

  const isWeekday = day >= 1 && day <= 5;
  const isOpen = isWeekday && currentTime >= openTime && currentTime < closeTime;

  if (isOpen) {
    statusPing.classList.remove("closed");
    statusTitle.textContent = "🟢 Koperasi Buka Sekarang";
    statusDetail.textContent = "Melayani sampai pukul 17.00 WIB hari ini";
  } else {
    statusPing.classList.add("closed");
    statusTitle.textContent = "🔴 Koperasi Sedang Tutup";
    if (isWeekday && currentTime < openTime) {
      statusDetail.textContent = "Buka hari ini pukul 07.30 WIB";
    } else {
      statusDetail.textContent = "Buka kembali hari kerja pukul 07.30 WIB";
    }
  }
}

// =============================================================================
// 7. REVIEWS & RATINGS LOGIC (With LocalStorage & Star Picker)
// =============================================================================
const reviewGrid = document.getElementById("reviewGrid");
const reviewFilterPills = document.getElementById("reviewFilterPills");
let activeReviewFilter = "all";

function calculateRatings() {
  if (reviewsData.length === 0) return;

  const avg = reviewsData.reduce((acc, r) => acc + r.rating, 0) / reviewsData.length;
  const scoreRounded = avg.toFixed(1);

  const averageScore = document.getElementById("averageScore");
  const totalReviewsCount = document.getElementById("totalReviewsCount");
  const averageStars = document.getElementById("averageStars");

  if (averageScore) averageScore.textContent = scoreRounded;
  if (totalReviewsCount) totalReviewsCount.textContent = `Berdasarkan ${reviewsData.length} ulasan`;

  if (averageStars) {
    const fullStars = Math.round(avg);
    averageStars.textContent = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
  }
}

function renderReviews() {
  calculateRatings();

  const filtered = reviewsData.filter(r => {
    if (activeReviewFilter === "all") return true;
    return r.rating === parseInt(activeReviewFilter, 10);
  });

  if (!reviewGrid) return;

  if (filtered.length === 0) {
    reviewGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        Belum ada ulasan untuk rating bintang ini. Jadilah yang pertama memberikan ulasan!
      </div>
    `;
    return;
  }

  // Color generator for avatar initials
  const avatarColors = ["avatar-blue", "avatar-cyan", "avatar-indigo"];

  reviewGrid.innerHTML = filtered.map((rev, index) => {
    const initial = rev.name.charAt(0).toUpperCase();
    const colorClass = avatarColors[index % avatarColors.length];
    const isLiked = likedReviews.has(rev.id);
    const starString = "★".repeat(rev.rating) + "☆".repeat(5 - rev.rating);

    return `
      <article class="review-card" data-id="${rev.id}">
        <div class="review-card-header">
          <div class="review-stars">${starString}</div>
          <span class="review-date">${escapeHtml(rev.date || "Baru saja")}</span>
        </div>
        <p class="review-text">“${escapeHtml(rev.text)}”</p>
        <div class="review-card-footer">
          <div class="reviewer-profile">
            <div class="avatar-circle ${colorClass}">${initial}</div>
            <div class="reviewer-info">
              <strong>${escapeHtml(rev.name)}</strong>
              <small>${escapeHtml(rev.role || "Civitas Kampus")}</small>
            </div>
          </div>
          <button class="btn-like-review ${isLiked ? 'liked' : ''}" data-id="${rev.id}" aria-label="Sukai ulasan ini">
            <span>👍</span>
            <span class="like-count">${rev.likes || 0}</span>
          </button>
        </div>
      </article>
    `;
  }).join("");

  // Attach like handlers
  reviewGrid.querySelectorAll(".btn-like-review").forEach(btn => {
    btn.addEventListener("click", () => {
      const revId = btn.dataset.id;
      toggleLikeReview(revId);
    });
  });
}

function toggleLikeReview(reviewId) {
  const target = reviewsData.find(r => r.id === reviewId);
  if (!target) return;

  if (likedReviews.has(reviewId)) {
    likedReviews.delete(reviewId);
    target.likes = Math.max(0, (target.likes || 1) - 1);
  } else {
    likedReviews.add(reviewId);
    target.likes = (target.likes || 0) + 1;
    showToast("Terima kasih atas apresiasimu!", "info");
  }

  try {
    localStorage.setItem("it_solution_koperasi_likes", JSON.stringify(Array.from(likedReviews)));
    localStorage.setItem("it_solution_koperasi_reviews", JSON.stringify(reviewsData));
  } catch (e) { }

  renderReviews();
}

// Review Filter Buttons
if (reviewFilterPills) {
  reviewFilterPills.querySelectorAll(".review-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      reviewFilterPills.querySelectorAll(".review-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeReviewFilter = btn.dataset.filter;
      renderReviews();
    });
  });
}

// Review Modal Elements
const reviewModalOverlay = document.getElementById("reviewModalOverlay");
const btnOpenReviewModal = document.getElementById("btnOpenReviewModal");
const closeReviewModalBtn = document.getElementById("closeReviewModalBtn");
const btnCancelReview = document.getElementById("btnCancelReview");
const addReviewForm = document.getElementById("addReviewForm");
const starRatingInput = document.getElementById("starRatingInput");
const ratingFeedbackText = document.getElementById("ratingFeedbackText");
const reviewText = document.getElementById("reviewText");
const charCount = document.getElementById("charCount");

let selectedStars = 5;
const ratingLabels = {
  1: "1 Bintang - Kurang Memuaskan",
  2: "2 Bintang - Cukup",
  3: "3 Bintang - Lumayan Baik",
  4: "4 Bintang - Bagus Sekali",
  5: "5 Bintang - Sangat Memuaskan!"
};

function openReviewModal() {
  if (reviewModalOverlay) {
    reviewModalOverlay.classList.add("active");
    reviewModalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function closeReviewModal() {
  if (reviewModalOverlay) {
    reviewModalOverlay.classList.remove("active");
    reviewModalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (addReviewForm) addReviewForm.reset();
    selectedStars = 5;
    updateStarInputDisplay(5);
  }
}

function updateStarInputDisplay(rating) {
  if (!starRatingInput) return;
  const stars = starRatingInput.querySelectorAll(".star-btn");
  stars.forEach(star => {
    const val = parseInt(star.dataset.value, 10);
    star.classList.toggle("active", val <= rating);
  });
  if (ratingFeedbackText) {
    ratingFeedbackText.textContent = ratingLabels[rating] || `${rating} Bintang`;
  }
}

if (starRatingInput) {
  const stars = starRatingInput.querySelectorAll(".star-btn");
  stars.forEach(star => {
    star.addEventListener("mouseenter", () => {
      const val = parseInt(star.dataset.value, 10);
      stars.forEach(s => {
        s.classList.toggle("hovered", parseInt(s.dataset.value, 10) <= val);
      });
    });

    star.addEventListener("mouseleave", () => {
      stars.forEach(s => s.classList.remove("hovered"));
    });

    star.addEventListener("click", () => {
      selectedStars = parseInt(star.dataset.value, 10);
      updateStarInputDisplay(selectedStars);
    });
  });
}

if (reviewText && charCount) {
  reviewText.addEventListener("input", () => {
    charCount.textContent = reviewText.value.length;
  });
}

if (btnOpenReviewModal) btnOpenReviewModal.addEventListener("click", openReviewModal);
if (closeReviewModalBtn) closeReviewModalBtn.addEventListener("click", closeReviewModal);
if (btnCancelReview) btnCancelReview.addEventListener("click", closeReviewModal);

if (reviewModalOverlay) {
  reviewModalOverlay.addEventListener("click", (e) => {
    if (e.target === reviewModalOverlay) closeReviewModal();
  });
}

// Add Review Form Submission
if (addReviewForm) {
  addReviewForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("reviewName").value.trim();
    const role = document.getElementById("reviewRole").value;
    const text = document.getElementById("reviewText").value.trim();

    if (!name || !text) {
      alert("Silakan lengkapi nama dan ulasan kamu.");
      return;
    }

    const newReview = {
      id: "rev-" + Date.now(),
      name: name,
      role: role,
      rating: selectedStars,
      text: text,
      date: "Baru saja",
      likes: 1
    };

    reviewsData.unshift(newReview);

    try {
      localStorage.setItem("it_solution_koperasi_reviews", JSON.stringify(reviewsData));
    } catch (err) { }

    closeReviewModal();
    renderReviews();
    showToast("Terima kasih! Ulasanmu berhasil ditambahkan.");
  });
}

// =============================================================================
// 8. PRICE LIST PHOTO PREVIEW MODAL
// =============================================================================
const photoModalOverlay = document.getElementById("photoModalOverlay");
const btnOpenReferencePhoto = document.getElementById("btnOpenReferencePhoto");
const closePhotoModalBtn = document.getElementById("closePhotoModalBtn");

if (btnOpenReferencePhoto && photoModalOverlay) {
  btnOpenReferencePhoto.addEventListener("click", () => {
    photoModalOverlay.classList.add("active");
    photoModalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
}

if (closePhotoModalBtn && photoModalOverlay) {
  closePhotoModalBtn.addEventListener("click", () => {
    photoModalOverlay.classList.remove("active");
    photoModalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  });
}

if (photoModalOverlay) {
  photoModalOverlay.addEventListener("click", (e) => {
    if (e.target === photoModalOverlay) {
      photoModalOverlay.classList.remove("active");
      photoModalOverlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  });
}

// =============================================================================
// 9. LOCATION: COPY ADDRESS WITH TOAST
// =============================================================================
const btnCopyAddress = document.getElementById("btnCopyAddress");
const fullAddressText = document.getElementById("fullAddressText");

if (btnCopyAddress && fullAddressText) {
  btnCopyAddress.addEventListener("click", () => {
    const textToCopy = fullAddressText.textContent.trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Alamat IT Solution berhasil disalin ke clipboard!");
      }).catch(() => {
        fallbackCopy(textToCopy);
      });
    } else {
      fallbackCopy(textToCopy);
    }
  });
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    showToast("Alamat IT Solution berhasil disalin ke clipboard!");
  } catch (err) {
    showToast("Gagal menyalin alamat secara otomatis.", "info");
  }
  document.body.removeChild(textarea);
}

// =============================================================================
// 10. NAVBAR, SCROLLSPY & MOBILE HAMBURGER
// =============================================================================
const siteHeader = document.getElementById("siteHeader");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Mobile menu toggle
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close nav on link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close mobile nav when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target) && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Scroll Handler: Header Shadow, Scroll-to-Top Button, and Scrollspy
const sections = document.querySelectorAll("section[id], header[id]");
const navAnchorLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  // Header elevation
  if (siteHeader) {
    if (currentScroll > 30) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  }

  // Scroll to top button visibility
  if (scrollTopBtn) {
    if (currentScroll > 380) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  }

  // Scrollspy: Active nav link highlighting
  let currentSectionId = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  if (currentSectionId) {
    navAnchorLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === `#${currentSectionId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
}, { passive: true });

// Scroll to Top Click
if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Footer Category filter links quick jump
document.querySelectorAll(".filter-link").forEach(link => {
  link.addEventListener("click", (e) => {
    const targetFilter = link.dataset.filter;
    if (!targetFilter) return;

    activeCategory = targetFilter;
    const matchingBtn = document.querySelector(`.filter-btn[data-filter="${targetFilter}"]`);
    if (matchingBtn && filterTabs) {
      filterTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      matchingBtn.classList.add("active");
    }
    renderMenuGrid();
  });
});

// Helper: Escape HTML strings to prevent XSS
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Keyboard ESC to close any open modal/drawer
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    closeReviewModal();
    if (photoModalOverlay) {
      photoModalOverlay.classList.remove("active");
      photoModalOverlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }
});

// =============================================================================
// 11. INITIALIZATION ON DOM READY
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Current dynamic year in footer
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Update counts, render menu and reviews
  updateCategoryCounts();
  renderMenuGrid();
  renderReviews();
  updateCartUI();
  checkOperationalStatus();

  // Re-check operational status every 60 seconds
  setInterval(checkOperationalStatus, 60000);
});
