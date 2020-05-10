import React, {useState} from "react";
import Item from "../components/Item";
import Add from "../components/Add"
import Dashboard from '../components/Dashboard'

function BudgetDashboard() {
  const defitems = [
    {
      title: "food",
      spent: 30,
      budget: 60,
    },
    {
      title: "foodoo",
      spent: 80,
      budget: 80,
    },
  ];
  const [items, setItems] = useState(defitems)

  const calc = (spent,budget) => {
    return Math.floor((spent / budget) * 100);
  }

  const addItem = (item) => {
    setItems(...items, item)
  }

  let totalSpent = 0
  let totalBudget = 0
  items.forEach(item => {
    totalBudget += item.budget;
    totalSpent += item.spent;
    console.log(items);
    
  })

  return (
    <div>
      {/* <Add handleSubmit={addNew}/> */}
      <Dashboard items={items} budget={totalBudget} spent={totalSpent} per={calc(totalSpent, totalBudget)} addItem={addItem} />
    </div>
  );
}

export default BudgetDashboard;
