window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calc-form");
    if (form) {
        setupIntialValues();
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            update();
        });
    }
});

function getCurrentUIValues() {
    return {
        amount: +document.getElementById("loan-amount").value,
        years: +document.getElementById("loan-years").value,
        rate: +document.getElementById("loan-rate").value,
    };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    const values = { amount: 100000, years: 30, rate: 2.5 };
    const amountUI = document.getElementById("loan-amount");
    const yearsUI = document.getElementById("loan-years");
    const rateUI = document.getElementById("loan-rate");
    amountUI.value = values.amount;
    yearsUI.value = values.years;
    rateUI.value = values.rate;
    update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    const currentUIVals = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(currentUIVals));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    const monthlyRate = values.rate / 100 / 12;
    const months = values.years * 12;
    return (
        (monthlyRate * values.amount) /
        (1 - Math.pow(1 + monthlyRate, -months))
    ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    const monthlyUI = document.getElementById("monthly-payment");
    monthlyUI.innerText = `$ ${monthly}`
}
