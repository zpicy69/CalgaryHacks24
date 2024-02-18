import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import AddBudgetModal from "./components/AddBudgetModal"
import AddExpenseModal from "./components/AddExpenseModal"
import ViewExpensesModal from "./components/ViewExpensesModal"
import BudgetCard from "./components/BudgetCard"
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard"
import TotalBudgetCard from "./components/TotalBudgetCard"
import { useState } from "react"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/BudgetsContext"

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  const containerStyle = {
    backgroundColor: '#264A46', // Set background color #264A46
    padding: '40px', // Set padding
    borderRadius: '25px', // Set border radius
    width: '100%', // Make container width 100%
    height: '100%' // Make container height 100% of viewport height
    // Add more styles as needed
  };

  return (
    
    <>
      <Container style={containerStyle} className="my-4">
        <Stack direction="vertical" gap="2" className="mb-4" style={{ width: '100%', height: '150px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <h1 style={{ color: 'white' }}>Budget-Buddy</h1>
        </div>
          <Button style={{ backgroundColor: 'black' }} variant="secondary" onClick={() => setShowAddBudgetModal(true)}>
            Add Monthly Budget
          </Button>
          <Button variant="secondary" onClick={openAddExpenseModal}>
            Add Expense
          </Button>
        </Stack>
        <div
          style={{
            display: "block",
            marginBottom: "1rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            gap: "1rem",
            alignItems: "center",
          }}>
          {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0
            )
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                onViewExpensesClick={() =>
                  setViewExpensesModalBudgetId(budget.id)
                }
              />
            )
          })}
          <UncategorizedBudgetCard
            onAddExpenseClick={openAddExpenseModal}
            onViewExpensesClick={() =>
              setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
            }
          />
          <TotalBudgetCard />
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <ViewExpensesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId()}
      />
    </>
  )
}

export default App
