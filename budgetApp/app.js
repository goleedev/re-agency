// BUDGET CONTROLLER
var budgetController = (function() {})();

// UI CONTROLLER
var UIController = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getinput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMstrings();

  var ctrlAddItem = function() {
    var input = UICtrl.getinput();
    console.log(input);
  };

  document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

  document.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
