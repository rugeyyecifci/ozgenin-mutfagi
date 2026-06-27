const products = [
  { name: "Tavuk Şinitzel", price: "1750 TL", category: "ana", image: "tavuksinitzel.png" },
  { name: "Anne Köftesi", price: "2000 TL", category: "ana", image: "annekoftesi.png" },
  { name: "Patlıcanlı İslim Kebabı", price: "2250 TL", category: "ana", image: "islimkebabi.png" },
  { name: "Karnıyarık", price: "2000 TL", category: "ana", image: "karniyarik.png" },
  { name: "Taze Fasulye", price: "1500 TL", category: "ana", image: "tazefasulye.png" },
  { name: "Ispanak", price: "800 TL", category: "ana", image: "ispanak.png" },
  { name: "Mantı", price: "1000 TL", category: "ana", image: "manti.png" },
  { name: "İçli Köfte", price: "200 TL/adet", category: "ana", image: "iclikofte.png" },
  { name: "Buzluk Anne Usulü Kuru Köfte", price: "2000 TL", category: "ana", image: "kurukofte.png" },

  { name: "Et Suyu Mercimek Çorbası", price: "600 TL", category: "corba", image: "mercimek.png" },
  { name: "Et Suyu Şehriye Çorbası", price: "500 TL", category: "corba", image: "sehriye.png" },

  { name: "Pizza Karışık", price: "750 TL", category: "borek", image: "pizza.png" },
  { name: "Yufka Börek Patatesli", price: "1200 TL", category: "borek", image: "patatesliborek.png" },
  { name: "Yufka Börek Peynirli", price: "1200 TL", category: "borek", image: "peynirliborek.png" },
  { name: "Yufka Börek Kıymalı", price: "1500 TL", category: "borek", image: "kiymaliborek.png" },
  { name: "Yufka Börek Pırasalı Kıymalı", price: "1500 TL", category: "borek", image: "pirasaliborek.png" },
  { name: "Tereyağlı Peynirli Su Böreği", price: "2500 TL", category: "borek", image: "suboregi.png" },
  { name: "Poğaça Sade", price: "750 TL", category: "borek", image: "pogacasade.png" },
  { name: "Poğaça Peynirli", price: "1000 TL", category: "borek", image: "pogacapeynirli.png" },

  { name: "Tereyağlı Tuzlu Susamlı Pekmezli Kurabiye", price: "1200 TL", category: "kurabiye", image: "susamlikurabiye.png" },
  { name: "Hindistan Cevizli Coco Kurabiye", price: "1500 TL", category: "kurabiye", image: "coco.png" },
  { name: "Tereyağlı Çörekotlu Dereotlu Tuzlu Kurabiye", price: "1200 TL", category: "kurabiye", image: "dereotlukurabiye.png" },
  { name: "Tereyağlı Zeytin Üzüm Ceviz Tam Buğday Kurabiye", price: "1600 TL", category: "kurabiye", image: "tambugdaykurabiye.png" },
  { name: "Tereyağlı Mahlepli Tuzlu Kurabiye", price: "1000 TL", category: "kurabiye", image: "mahlepli.png" },
  { name: "Tereyağlı Damla Çikolatalı Tatlı Kurabiye", price: "1200 TL", category: "kurabiye", image: "damlacikolatali.png" },
  { name: "Tereyağlı Tarçınlı Tatlı Kurabiye", price: "1000 TL", category: "kurabiye", image: "tarcinli.png" },

  { name: "Çikolatalı Kek Büyük Borcam", price: "1000 TL", category: "tatli", image: "cikolatalikek.png" },
  { name: "Şeftalili Kek Yuvarlak Borcam", price: "1000 TL", category: "tatli", image: "seftalilikek.png" },
  { name: "Cevizli Üzümlü Kek Büyük Borcam", price: "1100 TL", category: "tatli", image: "cevizlikek.png" },
  { name: "Tiramisu Büyük Borcam", price: "1500 TL", category: "tatli", image: "tiramisu.png" },
  { name: "Etimek Tatlısı Büyük Borcam", price: "1500 TL", category: "tatli", image: "etimek.png" },

  { name: "Zeytinyağlı Enginar 6 Adet", price: "2000 TL", category: "salata", image: "enginar.png" },
  { name: "Sarma Zeytinyağlı", price: "1500 TL", category: "salata", image: "sarma.png" },
  { name: "Sarma Etli", price: "2000 TL", category: "salata", image: "etlisarma.png" },
  { name: "Makarna Salatası", price: "800 TL", category: "salata", image: "makarnasalatasi.png" },
  { name: "Kısır", price: "850 TL", category: "salata", image: "kisir.png" }
];

const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

let activeCategory = "all";

function renderProducts() {
  const searchText = searchInput.value.toLowerCase();

  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const searchMatch = product.name.toLowerCase().includes(searchText);
    return categoryMatch && searchMatch;
  });

  productsContainer.innerHTML = filteredProducts.map(product => `
    <div class="card">
      <span class="heart">♡</span>

      <div class="card-img-wrap">
        <img 
          src="images/${product.image}" 
          alt="${product.name}" 
          onerror="this.src='images/logo.png'"
        >
      </div>

      <div class="card-body">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
      </div>
    </div>
  `).join("");
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

renderProducts();

const heroImages = [
  "annekoftesi.png",
  "karniyarik.png",
  "sarma.png",
  "mercimek.png",
  "tiramisu.png"
];

let currentSlide = 0;
const heroImage = document.getElementById("heroImage");

function showSlide() {
  heroImage.style.opacity = 0;

  setTimeout(() => {
    heroImage.src = `images/${heroImages[currentSlide]}`;
    heroImage.style.opacity = 1;
  }, 250);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % heroImages.length;
  showSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
  showSlide();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Her 3 saniyede bir otomatik değiştir
setInterval(nextSlide, 3000);