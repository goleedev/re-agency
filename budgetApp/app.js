// BUDGET CONTROLLER
var budgetController = (function() {})();

// UI CONTROLLER
var UIController = (function() {})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    console.log("It works");
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
