// Задание №1

function hidePhone(phone) {
    let digitsToShow = phone.slice(0, -2);
    let hiddenDigits = "xx";
    return digitsToShow + hiddenDigits;
 }
 
 let originalNumber = prompt("Enter the number : ");
 let hiddenNumber = hidePhone(originalNumber);
 console.log(hiddenNumber);
 
 // Задание №2
 
 function myReverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
 }
 
 let originalString = "12345678910";
 let reversedString = myReverse(originalString);
 console.log(reversedString);
 