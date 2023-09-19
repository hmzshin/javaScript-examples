// 1a

let surucuYası = 15;
if (surucuYası > 18) {
  console.log(true);
} else {
  console.log(false);
}

//1b

let birinciDeger = 22;
let ikinciDeger = 35;

if (birinciDeger >= ikinciDeger) {
  birinciDeger = 67;
}

console.log(birinciDeger);

//1c

let sayı = "1999";
let yeni_sayı = Number(sayı);
console.log(typeof yeni_sayı);

//1d

function carpma(num1, num2) {
  return num1 * num2;
}
console.log(carpma(7, 4));

//2

function kopeginYasi(yıl) {
  kopek_yası = yıl * 7;
  return kopek_yası;
}
console.log(`Köpeğin yaşı = ${kopeginYasi(3)}`);

//3

function oyun(oyuncu, bilgisayar) {
  if (oyuncu == "Taş" && bilgisayar == "Taş") {
    console.log("Beraberlik");
  } else if (oyuncu == "Kağıt" && bilgisayar == "Kağıt") {
    console.log("Beraberlik!");
  } else if (oyuncu == "Makas" && bilgisayar == "Makas") {
    console.log("Beraberlik");
  } else if (oyuncu == "Kağıt" && bilgisayar == "Makas") {
    console.log("Kaybettin!");
  } else if (oyuncu == "Kağıt" && bilgisayar == "Taş") {
    console.log("Kazandın!");
  } else if (oyuncu == "Makas" && bilgisayar == "Taş") {
    console.log("Kaybettin!");
  } else if (oyuncu == "Taş" && bilgisayar == "Kağıt") {
    console.log("Kaybettin!");
  } else if (oyuncu == "Makas" && bilgisayar == "Kağıt") {
    console.log("Kazandın!");
  } else {
    console.log("Kazandın!");
  }
}

function bilgisayarınSecimi(a) {
  if (0 <= a && a <= 0.33) {
    secim = "Taş";
  } else if (0.34 <= a && a <= 0.66) {
    secim = "Makas";
  } else {
    secim = "Kağıt";
  }
  return secim;
}
let a = Math.random();
let player = "Kağıt";
console.log(`Oyuncu seçimi ${player}`);
console.log(`Bilgisayar seçimi :${bilgisayarınSecimi(a)}`);

oyun(player, bilgisayarınSecimi(a));

// 4a
function milDonusturucu(km) {
  let mil = km * 0.62137;
  return mil.toFixed(2);
}

console.log(milDonusturucu(100));

//4b

function feetDonusturucu(cm) {
  let feet = cm / 30.48;
  return feet.toFixed(2);
}

console.log(feetDonusturucu(100));

//5

function cocukSarkisi(maymunSayısı) {
  for (let i = maymunSayısı; i > 0; i--) {
    console.log(
      `${i} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!`
    );
  }
}
cocukSarkisi(5);

//6

function notHesapla(not) {
  if (not <= 100 && not >= 90) {
    console.log("A Aldın");
  } else if (not <= 89 && not >= 80) {
    console.log("B Aldın");
  } else if (not <= 79 && not >= 70) {
    console.log("C Aldın");
  } else if (not <= 69 && not >= 60) {
    console.log("D Aldın");
  } else {
    console.log("F Aldın");
  }
}

notHesapla(90);
