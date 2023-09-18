console.log("merhaba dünya");

const age=25;
const user_name= "Hamza Şahin";
//for döngüsü
if (age>=18) {

    console.log(`Merhaba ${user_name} Sitemize hoş geldin`);    
}else{

    console.log(`Merhaba ${user_name} Bu siteye giriş yapmak için yaşınız küçük`);
}


//while döngüsü

const factorial_number=5;
let factorial=1;

for (let i = 1; i <=factorial_number; i++) {

    factorial = factorial*i;   
    console.log(factorial) ;
}

console.log(`${factorial_number} sayısının faktorieli ${factorial} dir`);