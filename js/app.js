let pageOne = document.getElementById('page-one');
let pageTwo = document.getElementById('page-two');
let budgetInput = document.getElementById('budget-input');
let pageOneBtn = document.getElementById('first-page-btn');
let budgetError = document.getElementById('page-one-error-div');
let total = document.getElementById('total');
let left = document.getElementById('left');
let expenseName = document.getElementById('expense');
let amount = document.getElementById('amount');
let alertDanger = document.getElementById('alert-danger');

let budget, userBudget;

// class's
class Budget {
   constructor(budget) {
      this.budget = Number(budget);
      this.budgetLeft = this.budget;
   }
   substractFromBudg(amount){
      return this.budgetLeft -= amount;
   }
}

class HTML {

   insertBudget(amount) {
      total.innerHTML = `${amount}`
      left.innerHTML = `${amount}`
   }

   addExpenseToList(name, amount,e) {
      e.preventDefault()
      const expenseList = document.querySelector('#expenses ul');
      const li = document.createElement('li');
      li.innerHTML = `${name} <span class="badge badge-danger"> ${amount}</span>`;
      expenseList.appendChild(li);
   }
   trackBudget(amount){
      const whatsLeft = budget.substractFromBudg(amount);
      console.log(whatsLeft);
      left.innerHTML = `${whatsLeft}`;
   }
}




html = new HTML()

pageOneBtn.addEventListener('click', function (e) {
   e.preventDefault();
   if (budgetInput.value === null || budgetInput.value === '' || budgetInput.value === '0') {
      budgetError.innerHTML = "התקציב שהוזן לא תקין"
   } else {
      pageOne.style.display = "none";
      pageTwo.style.display = "Block";
      budget = new Budget(budgetInput.value);
      html.insertBudget(budget.budget)
   }
});


const addExpenseForm = (e) => {
   e.preventDefault();
   if (expenseName.value === '' || amount.value === '') {
      alertDanger.style.display = "block"
      alertDanger.innerHTML = "השדות ריקים";
      setTimeout(function () {
         alertDanger.style.display = "none"
         expenseName.value = "";
         amount.value = "";
      }, 3000);
   } else {
     html.addExpenseToList(expenseName.value, amount.value);
      html.trackBudget(amount.value);
      expenseName.value = "";
         amount.value = "";
   }
};
