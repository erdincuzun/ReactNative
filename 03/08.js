const musteri = { name: "Metin" }
const urun = { miktar: 7, uAdi: "Bar", fiyat: 42 }
const deg1 = 'ES6'
const cikti = `Merhaba ${deg1}`

console.log(musteri)
console.log(urun)
console.log(deg1)
console.log(cikti)

const cok_satir = `Merhaba ${musteri.name}
Çok satırlı bir örnek
Birim fiyatı ${urun.fiyat} olan ${urun.uAdi}'dan ${urun.miktar} adet alındı.
Toplam fiyat : ${urun.fiyat * urun.miktar}
İlk üç sayının toplamı :  ${1 + 2 + 3}`
console.log(cok_satir)