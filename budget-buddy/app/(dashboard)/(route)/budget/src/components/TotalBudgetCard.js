import { useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./TotalSavingsCard"

export default function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)

  const totalSavings = max - amount;
  
  if (max === 0) return null

  if(totalSavings < 0)
    return <BudgetCard amount={-totalSavings} name="You exceeded your budget by"/>
  else
    return <BudgetCard amount={totalSavings} name="Total Savings" />
}
