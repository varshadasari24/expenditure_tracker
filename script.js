document.getElementById("calculateBtn").addEventListener("click", calculateBudget);

function calculateBudget() {
  const categories = ["food", "expenses", "enjoyment", "tickets"];
  
  categories.forEach(category => {
    const total = parseFloat(document.getElementById(`${category}Total`).value) || 0;
    const spent = parseFloat(document.getElementById(`${category}Spent`).value) || 0;
    const remaining = total - spent;
    document.getElementById(`${category}Remaining`).textContent = remaining >= 0 ? remaining : "Over Budget";
  });
}
