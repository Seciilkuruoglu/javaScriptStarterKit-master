//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )//
function primeNumber(...numbers) { //"..." operatörüne "rest" operatörü denilir. Birçok sayı kullancağımız için rest operatörü ile yazarız.
    let count
    for (let i = 0; i < numbers.length; i++) {
      count = 0
      for (let z = 1; z <= numbers[i]; z++) {
        if (numbers[i] % z == 0) { 
          count++
        }
      }
      if (count == 2) { //kalan 2 ise;
        console.log(numbers[i] + " asal sayıdır.") 
      } else {
        console.log(numbers[i] + " asal sayı değildir.")
      }
    }
  }
  
findPrime(2, 5, 8, 21, 13);
findPrime(3, 5);