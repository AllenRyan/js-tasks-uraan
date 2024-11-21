// age to days converter logic
document.getElementById("ageForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const age = document.getElementById("age").value;
    const days = age * 365.25;
    let p = document.querySelector(".result").innerHTML = `You are approximately ${days} days old`;
})
// hours to minute converter logic
document.getElementById("hourForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const hours = document.getElementById("hours").value;
    const minutes = hours * 60;
    let p =  document.querySelector(".hour-result").innerHTML = `there are ${minutes} minutes in ${hours} hours`;
})
// Creating function to find the next number based on the user input
function findNextNumber(){
    let number = document.getElementById("number").value;
    let actualNumber = Number(number);
    let secondNumber = actualNumber + 1;
    let p = document.querySelector(".next-number").innerHTML = secondNumber;
}

// Creating function to display name in right order
function displayCapName(){
    let name = document.getElementById("text").value;
    let modifyName = name.charAt(0).toUpperCase() + name;
    let p = document.querySelector(".displayName").innerHTML = modifyName;
}

// Calculating Body mass index based on user input
function displayBmi(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let actualHeight = height / 3.2;
    let Bmi = weight / (actualHeight * actualHeight);
    let p = document.querySelector(".displayBmiResult").innerHTML = Bmi;
    
    
}
// Creating function to get the first and last element of an array
let fruits = ["Banana", "Apple", "orange","Watermelon", "Mangoes"];
// console.log(fruits)

function pickFruits(){
 let firstItem = fruits[0];
 let lastItem = fruits.pop();
 console.log(firstItem, lastItem)
}
pickFruits();

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
        } else {
            const sum = number1 + number2;
           resultBox.value = sum;
        }
    }
}

