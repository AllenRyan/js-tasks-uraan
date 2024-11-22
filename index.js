// age to days converter logic
document.getElementById("ageForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const age = document.getElementById("age").value;
    if(age <= 0){
        let p = document.querySelector(".result").innerHTML = `please enter valid age`;
    }else{
        const days = age * 365.25;
        let p = document.querySelector(".result").innerHTML = `You are approximately ${days} days old`;
    }
    
})
// hours to minute converter logic
document.getElementById("hourForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const hours = document.getElementById("hours").value;
    if(hours < 1){
        let p =  document.querySelector(".hour-result").innerHTML = `please enter valid hours`;
    }else{
        const minutes = hours * 60;
        let p =  document.querySelector(".hour-result").innerHTML = `there are ${minutes} minutes in ${hours} hours`;
    }
  
   
})
// Creating function to find the next number based on the user input
function findNextNumber(){
    let number = document.getElementById("number").value;
    if(number < 0){
        let p = document.querySelector(".next-number").innerHTML = "Please enter a valid number";
    } else{
        let actualNumber = Number(number);
        let secondNumber = actualNumber + 1;
        let p = document.querySelector(".next-number").innerHTML = secondNumber;
    }
   
    
}

// Creating function to display name in right order
function displayCapName(){
    let name = document.getElementById("text").value;
    let firstName = name.split(" ")[0];
    let lastName = name.split(" ")[1];
    console.log(firstName)
    console.log(lastName)
    let modifyName = firstName.charAt(0).toUpperCase() + firstName.slice(1, ) + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1,);
    
    let p = document.querySelector(".displayName").innerHTML = modifyName;
}

// Calculating Body mass index based on user input
function displayBmi(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    if(weight <= 0 && height <= 0){
        let p = document.querySelector(".displayBmiResult").innerHTML = "Please enter a valid input";
    }else {
        let actualHeight = height / 3.2;
        let Bmi = weight / (actualHeight * actualHeight);
        let p = document.querySelector(".displayBmiResult").innerHTML = Bmi;
    }
      
    
    
    
}
// Creating function to get the first and last element of an array
let numbers = Array.from({length: 11}, () => Math.floor(Math.random() * 10));
// console.log(fruits)
// console.log(fruits)
const numArrays = document.getElementById("arrayItems").value = numbers;
 const pickNumbers = function pickNumbers(){
 let firstItem = numbers[0];
 let lastItem = numbers.pop();
 let result = firstItem + " " + lastItem;
 return result;

//  console.log(firstItem, lastItem)
}
const arrayResult = document.getElementById("arrayResult").value = pickNumbers();
// pickFruits();

// Last task

function updateResult(){
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let resultBox = document.querySelector("#result");


    if(num1 === "" || num2 === ""){
        resultBox.value = "Nan";
    } else{
        let number1 = Number(num1);
        let number2 = Number(num2);

        if(isNaN(number1) || isNaN(number2)){
            resultBox.value = "NaN";
        }else if(number1 < 0 || number2 < 0){
             resultBox.value  = "Please enter a valid numbers"
        }
         else {
            const sum = number1 + number2;
           resultBox.value = sum;
        }
    }
}

