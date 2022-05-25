// get the values from the Page
// start or controler function
function getValues(){
    // get values from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    // parse to Inetgers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue);   
        // we call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }
}

// generate numbers from startvalue to end value
// logic functions
function generateNumbers(sValue, eValue){
    let numbers = [];
    for (let index = sValue; index <= eValue; index++) {
        numbers.push(index);
    }
    return numbers;
}

// display the numbers and mark EVEN as bold
//display or view
function displayNumbers(numbers){
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let number = numbers[index];
        
        if(number %2 == 0){className = "even";}
        else{className = "odd";}
        
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows
}