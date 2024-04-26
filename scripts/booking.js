/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let selectedDays = 0;
let totalCost = document.getElementById("calculated-cost");
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let halfDays = document.getElementById("half");
let fullDays = document.getElementById("full");
let clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function select(day) {
    if (day.classList.contains("clicked")) {
        day.classList.remove("clicked");
        selectedDays = selectedDays - 1;
    }
    else {
        day.classList.add("clicked");
        selectedDays = selectedDays + 1;
    }
    updateCost();
}

monday.addEventListener("click", select(monday));
tuesday.addEventListener("click", select(tuesday));
wednesday.addEventListener("click", select(wednesday));
thursday.addEventListener("click", select(thursday));
friday.addEventListener("click", select(friday));



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear() {
    selectedDays = 0;
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    updateCost();
}

clearButton.addEventListener("click", clear);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function setHalfDay() {
    costPerDay = 20;
    halfDays.classList.add("clicked");
    fullDays.classList.remove("clicked");
    updateCost();
}

halfDays.addEventListener("click", setHalfDay);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function setFullDay() {
    costPerDay = 35;
    fullDays.classList.add("clicked");
    halfDays.classList.remove("clicked");
    updateCost();
}

fullDays.addEventListener("click", setFullDay);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCost() {
    totalCost.innerHTML = selectedDays * costPerDay;
}