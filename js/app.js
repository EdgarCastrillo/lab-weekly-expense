'use strict'

// Variables
const userBudget = prompt('¿Cual es tu presupuesto semanal?')
let quantityBudget


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

// Interface class, for everything related to HTML
class Interfaz {
  insertBudget(quantity) {
    const budgetSpan = document.querySelector('span#total')
    const remainingSpan = document.querySelector('span#remaining')

    // Insert to HTML
    budgetSpan.innerHTML = `${quantity}`
    remainingSpan.innerHTML = `${quantity}`

  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function(){
  if(userBudget === null || userBudget === '') {
    window.location.reload()
  } else {
    quantityBudget = new Budget(userBudget)
    console.log(quantityBudget)
    // Insert the intreface class
    const ui = new Interfaz()
    ui.insertBudget(quantityBudget.budget)
  }
})