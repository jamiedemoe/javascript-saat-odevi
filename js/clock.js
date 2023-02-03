let kullanici = prompt("lütfen adınızı ve soyadınızı giriniz");
// prompt ile sayfaya karşılama bildirimi ekledik
if (kullanici.length < 1) {
  alert("eksik girdiniz");
}

let kullaniciAdi = document.querySelector("#myName");
// kullanici adını html sayfasında hangi yere yazılacağını belirttik
kullaniciAdi.innerHTML = `${kullanici}`;
// innerhtml ile html sayfasına yazdırdık



function addZero(m) {
  if (m < 10) { // eğer m 10 dan küçük ise
    return "0" + m; // yan tarafına 0 koy
  }
  return m; // değilse sonuç olarak kendisini ver
}
function showTime() {
  const date = new Date();
  const saat = addZero(date.getHours());
  const dakika = addZero(date.getMinutes());
  const saniye = addZero(date.getSeconds());
  let zaman = saat + ":" + dakika + ":" + saniye;
  document.getElementById("myClock").innerHTML = zaman;
}

setInterval(showTime, 1000); // 1000 milisaniye 1 saniyeye denktir
