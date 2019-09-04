'use strict'

// Variables
const userBudget = prompt('¿Cual es tu presupuesto semanal?')
const form = document.getElementById('add-expense')
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

  printMessage(message, type) {
    const divMessage = document.createElement('div')
    divMessage.classList.add('text-center', 'alert')
    if(type === 'error') {
      divMessage.classList.add('alert-danger')
    } else {
      divMessage.classList.add('alert-success')
    }
    divMessage.appendChild(document.createTextNode(message))

    // Insert at DOM
    document.querySelector('.primary').insertBefore(divMessage, form)

    // Delete alert before 3s
    setTimeout(function() {
      document.querySelector('.primary .alert').remove()
      form.reset()
    }, 3000)
  }

  // Insert the expenses at list
  addExpenseList(name, quantity) {
    const expenseList = document.querySelector('#expenses ul')

    // Create li
    const li = document.createElement('li')
    li.className = 'list-group-item d-flex justify-content-between align-items-center'
    li.innerHTML = `
      ${name}
      <span class="badge badge-primary badge-pill">${quantity}</span>
    `
    // Insert to HTML
    expenseList.appendChild(li)
  }

  // Check the remaining budget
  remainingBudget(quantity) {
    const remaining = document.querySelector('span#remaining')
    // Read remaining budget
    const remainingUserBudget = quantityBudget.remainingBudget(quantity)
    remaining.innerHTML = `
      ${remainingUserBudget}
    `
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

form.addEventListener('submit', function(e) {
  e.preventDefault()

  // Read the expense form
  const nameExpense = document.querySelector('#expense').value
  const quantityExpense = document.querySelector('#quantity').value

  // Get the form in the interface
  const ui = new Interfaz

  // Check that the fields are not empty
  if(nameExpense === '' || quantityExpense === '') {
    ui.printMessage('Hubo un error', 'error')
  } else {
    // Insert to HTML
    ui.printMessage('Correcto', 'correct')
    ui.addExpenseList(nameExpense, quantityExpense)
    ui.remainingBudget(quantityExpense)
  }
})