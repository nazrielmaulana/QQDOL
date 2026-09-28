// =============================
// MENU MOBILE
// =============================

function toggleMenu() {

  const nav = document.querySelector(".navbar nav");

  nav.classList.toggle("open");

}


// Menutup menu setelah link diklik

document.querySelectorAll(".navbar nav a").forEach(function(link) {

  link.addEventListener("click", function() {

    document
      .querySelector(".navbar nav")
      .classList.remove("open");

  });

});



// =============================
// TOMBOL PESAN PRODUK
// =============================

function orderProduct(product) {

  alert(
    "Terima kasih! Kamu memilih " +
    product +
    ".\n\n" +
    "Silakan hubungi admin QQDOL untuk menyelesaikan pemesanan."
  );

}


// =============================
// KONTAK WHATSAPP
// =============================

function showContact(event) {

  event.preventDefault();

  alert(
    "Nomor WhatsApp belum dimasukkan.\n\n" +
    "Silakan masukkan nomor WhatsApp QQDOL " +
    "pada bagian kontak di index.html."
  );

}


// =============================
// SOCIAL MEDIA
// =============================

function showSocial(event) {

  event.preventDefault();

  alert(
    "Akun media sosial QQDOL belum dimasukkan.\n\n" +
    "Tambahkan Instagram atau TikTok QQDOL " +
    "pada bagian kontak."
  );

}


// =============================
// EFEK NAVBAR SAAT SCROLL
// =============================

window.addEventListener("scroll", function() {

  const nav = document.querySelector(".navbar");

  if (window.scrollY > 30) {

    nav.style.boxShadow =
      "0 5px 25px rgba(45,25,15,.08)";

  } else {

    nav.style.boxShadow = "none";

  }

});

