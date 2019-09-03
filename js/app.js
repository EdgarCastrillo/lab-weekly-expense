'use strict'

// Variables
const userBudget = prompt('¿Cual es tu presupuesto semanal?')
let quantityBudget

console.log(userBudget)

// Classes
class Budget {
  constructor(budget)  {
    this.budget = Number(budget)
    this.remaining = Number(budget)
  }

  // Method to subtract at actual budget
  remainingBudget(quantity = 0) {
    return this.remaining -= Number(quantity)
  }
  
}



// Event Listeners
document.addEventListener('DOMContentLoaded', function(){
  if(userBudget === null || userBudget === '') {
    window.location.reload()
  } else {
    quantityBudget = new Budget(userBudget)
    console.log(quantityBudget)
  }
})