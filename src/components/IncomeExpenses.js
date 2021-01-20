import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { getExpense,getIncome } = useContext(GlobalContext);


  return (
    <div className = "inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{getIncome()}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{getExpense()}</p>
      </div>      
    </div>
  )
}

export default IncomeExpenses;
