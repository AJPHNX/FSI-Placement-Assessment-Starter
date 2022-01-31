// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "AJ Phoenix" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let overallTotal = 0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const gbQuantity = document.querySelector('#qty-gb')
const ccQuantity = document.querySelector('#qty-cc')
const sugarQuantity = document.querySelector('#qty-sugar')
const totalQuantity = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!')
    gb++
    overallTotal++
    gbQuantity.textContent = gb
    totalQuantity.textContent = overallTotal
})
// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function() {
    console.log('Gingerbread - button was clicked!')
    if(gb>0){
        gb--
        overallTotal--
        gbQuantity.textContent = gb
        totalQuantity.textContent = overallTotal
    }else{gb = 0}
})
// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked!')
    cc++
    overallTotal++
    ccQuantity.textContent = cc
    totalQuantity.textContent = overallTotal
})
// Event listener for clicks on the "-" button for Chocolate Chip cookies
ccMinusBtn.addEventListener('click', function() {
    console.log('Chocolate Chip - button was clicked!')
    if(cc>0){
        cc--
        overallTotal--
        ccQuantity.textContent = cc
        totalQuantity.textContent = overallTotal
    }else{cc = 0}
})
// Event listener for clicks on the "+" button for Sugar cookies
sugarPlusBtn.addEventListener('click', function() {
    console.log('Sugar + button was clicked!')
    sugar++
    overallTotal++
    sugarQuantity.textContent = sugar
    totalQuantity.textContent = overallTotal
})
// Event listener for clicks on the "-" button for Sugar cookies
sugarMinusBtn.addEventListener('click', function() {
    console.log('Sugar - button was clicked!')
    if(sugar>0){
        sugar--
        overallTotal--
        sugarQuantity.textContent = sugar
        totalQuantity.textContent = overallTotal
    }else{sugar = 0}
})

