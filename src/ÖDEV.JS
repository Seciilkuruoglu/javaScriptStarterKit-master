console.log("1.SORU : JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.")
function isPrime(z) { //Sayının asal olup olmadığı true-false olarak döner.
  if (z > 1) {
        for (let i = 2; i < z - 1; i++) {
            if (z % i == 0) {  
                return false
            }
        }
        return true        
    } else {
        return false
    }
}
function Primefind(numbers) { // Sayıların asal-asal değil çıktısını veren fonksiyon
    numbers.forEach(z => {
        if (isPrime(z)) {
            console.log(z + " Asal Sayıdır.");
        } else {
            console.log(z + " Asal Sayı Değildir.");
        }
    });
};
let numbers = [2, 7, 19, 37, 41, 61, 89, 97]
Primefind(numbers)




   

console.log("4.SORU : 1000'e kadar ki tüm asal sayıları listeleyen programı yazınız. ")
let min = 2; // en düşük asal sayı=2
let max = 1000; // en yüksek =1000
while(min <= max)   //2< 1000'den küçük veya küçük eşittir
{
    let i = 0;  //test (i=kalan)
    for(let a = 2; a < min; a++) 
    {
        if(min % a == 0){  //mesela 2%2 bölündüğünde kalan 0 ve 0'a eşit ise 
            i = 1;  //i = 1 ise yani kalan 1 ise  asal sayı degil. 
            break;
        }
    }
    if(i == 0)  //0' eşit ise kalansız bölündüğü için asaldır
        console.log(min);  
    min++;
}


