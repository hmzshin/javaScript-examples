console.log("merhaba dünya");

let prompt = require("prompt-sync")({
    sigint: true
});
let age = prompt("What is your age: ");
let user_name = prompt("What's your name:");
let factorial_number = prompt("please enter the number you want to calculate its factorial:");

//if döngüsü
if (age >= 18) {

    console.log(`Merhaba ${user_name} Sitemize hoş geldin`);
} else {

    console.log(`Merhaba ${user_name} Bu siteye giriş yapmak için yaşınız küçük`);
}




let factorial = 1;
// for döngüsü ile faktöriyel hesaplama
for (let i = 1; i <= factorial_number; i++) {

    factorial = factorial * i;
}

console.log(`${factorial_number} sayısının  faktöriyeli = ${factorial}`); // for döngüsünün sonucunu ekrana yazdık

let non = user_name.length; // Girilen adın kapladığı karakter sayısı

console.log(non);// length komutu ile aldığımız değeri ekrana yazdık