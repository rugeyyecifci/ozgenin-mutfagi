# Özgenin Mutfağı

**Ev yapımı • Taze • Katkısız**

Özgenin Mutfağı, sipariş üzerine hazırlanan ev yapımı yemekleri, hamur işlerini, kurabiyeleri ve tatlıları tanıtan bir menü web sitesidir. Ziyaretçiler menüyü kategoriye göre inceleyebilir, yemek adıyla arama yapabilir ve beğendikleri ürünleri WhatsApp üzerinden sipariş edebilir.

## Özellikler

- **Görsel slayt:** Ana sayfada öne çıkan lezzetler otomatik olarak dönen bir slaytta gösterilir; oklarla elle de geçiş yapılabilir.
- **Kategorilere göre menü:** Ürünler kategorilere ayrılmıştır, tek tıkla filtrelenebilir.
- **Anlık arama:** Yemek adı yazıldıkça menü anında süzülür.
- **WhatsApp ile sipariş:** Tek tuşla WhatsApp sohbeti açılarak sipariş verilebilir.
- **Mobil uyumlu tasarım:** Telefon, tablet ve bilgisayarda düzgün görüntülenir.
- **Yukarı çık butonu:** Uzun menüde sayfanın başına hızlıca dönülebilir.

## Menü kategorileri

| Kategori | Örnek ürünler |
|----------|---------------|
| Ana Yemekler | Anne Köftesi, Karnıyarık, İslim Kebabı, Mantı, İçli Köfte |
| Çorbalar | Et Suyu Mercimek, Et Suyu Şehriye |
| Hamur İşleri | Su Böreği, Yufka Börekleri, Poğaça, Pizza |
| Kurabiyeler | Coco, Mahlepli, Tarçınlı, Damla Çikolatalı kurabiyeler |
| Tatlılar | Tiramisu, çeşitli kekler |
| Zeytinyağlılar & Salatalar | Sarma, Enginar, Kısır, Makarna Salatası |

## Kullanılan teknolojiler

- **HTML5**
- **CSS3**
- **JavaScript** (herhangi bir kütüphane veya framework kullanılmadan)

## Proje yapısı

```
ozgenin-mutfagi/
├── index.html   # Sayfa yapısı
├── style.css    # Tasarım ve mobil uyum
├── script.js    # Ürün listesi, arama, filtreleme ve slayt
├── logo.png     # Logo
└── *.png        # Ürün görselleri
```

## Çalıştırma

Herhangi bir kurulum gerekmez. Depoyu indirip `index.html` dosyasını tarayıcıda açmanız yeterlidir:

```bash
git clone https://github.com/rugeyyecifci/ozgenin-mutfagi.git
cd ozgenin-mutfagi
```

Site GitHub Pages ile de yayınlanabilir: **Settings → Pages** bölümünden `main` dalını seçmeniz yeterlidir.

## Menüyü güncelleme

Ürünler `script.js` dosyasının başındaki `products` listesinde tutulur. Yeni ürün eklemek için listeye şu biçimde bir satır eklenir ve görsel dosyası klasöre konur:

```js
{ name: "Ürün Adı", price: "1000 TL", category: "tatli", image: "gorsel.png" },
```

Kullanılabilecek kategoriler: `ana`, `corba`, `borek`, `kurabiye`, `tatli`, `salata`.

> Görseller temsilidir. Ürünler ev yapımı olduğundan görünüm farklılık gösterebilir.
