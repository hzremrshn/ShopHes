/* ============================================================
   [PUAN: 10] VERİTABANI İŞLEMLERİ (LocalStorage Seçeneği)
   ============================================================ */

// Form Gönderme İşlemi (iletisim.html için)
// [PUAN: 5] LocalStorage'a kaydetme
document.getElementById('iletisimFormu')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Sayfanın yenilenmesini engelle

    // Form verilerini al
    const yeniMesaj = {
        id: Date.now(),
        ad: document.getElementById('ad').value,
        email: document.getElementById('email').value,
        tel: document.getElementById('tel').value,
        mesaj: document.getElementById('mesaj').value,
        tarih: new Date().toLocaleString()
    };

    // Mevcut verileri çek veya boş dizi oluştur
    let mesajlar = JSON.parse(localStorage.getItem('siteMesajlari')) || [];

    // Yeni mesajı diziye ekle
    mesajlar.push(yeniMesaj);

    // Güncel diziyi tekrar LocalStorage'a kaydet
    localStorage.setItem('siteMesajlari', JSON.stringify(mesajlar));

    alert('Mesajınız başarıyla kaydedildi! (Yönetim sayfasından kontrol edebilirsiniz)');
    this.reset(); // Formu temizle
});

// Verileri Listeleme İşlemi (yonetim.html için derste yapacağız)
// [PUAN: 5] Kayıtlı verileri gösterme
function verileriGetir() {
    const tabloGovde = document.getElementById('veriListesi');

    // Eğer bu sayfada tablo yoksa fonksiyonu durdur
    if (!tabloGovde) return;

    // Verileri çek
    const mesajlar = JSON.parse(localStorage.getItem('siteMesajlari')) || [];

    // Tabloyu temizle ve doldur
    tabloGovde.innerHTML = mesajlar.map(m => `
        <tr>
            <td>${m.ad}</td>
            <td>${m.email}</td>
            <td>${m.tel}</td>
            <td>${m.mesaj}</td>
            <td>${m.tarih}</td>
        </tr>
    `).join('');
}

// Sayfa yüklendiğinde listeleme fonksiyonunu çalıştır
document.addEventListener('DOMContentLoaded', verileriGetir);