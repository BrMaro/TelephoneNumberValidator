const checkButton = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");


const regex1 = /^(1)\s?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]\d{4}(?:\s|$)/;
const regex2 = /^\d{10}(?:\s|$)/ ;
const regex3 = /^\(\d{3}\)[-\s]?\d{3}[-\s]\d{4}(?:\s|$)/;
const regex4 = /^\d{3}[-\s]?\d{3}[-\s]\d{4}(?:\s|$)/

const regexArray = [regex1, regex2, regex3, regex4]

const validateNumber = (num,regexArr) => regexArr.some( regex => regex.test(num)) 


checkButton.addEventListener('click',() => {
    console.log("clicked");
    if (userInput.value === ""){
        alert("Please provide a phone number");
        return 
    } else {
        result.textContent = validateNumber(userInput.value,regexArray) ? `Valid US number: ${userInput.value}` : `Invalid US number: ${userInput.value}`
    } 
})



clearButton.addEventListener('click',()=>{
    result.textContent="";
});