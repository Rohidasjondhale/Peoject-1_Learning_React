import react, {useState} from 'react';
import './NewExpense.css';



const ExpenseForm = () => {

  const [userInput, setUserInput] = useState ({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",

  });


  const titleChangeHandler = (event) => {
  
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle:event.target.value,
      }
    })
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount:event.target.value,
      }
    })
    
  };

  const dateChangeHandler = (event) => {
  
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate:event.target.value,
      }
    })
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="enteredTitle">Title</label>
          <input type="text" id="enteredTitle" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="enteredAmount">Amount</label>
          <input type="number" id="enteredAmount" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="enteredDate">Date</label>
          <input
            type="date"
            id="enteredDate"
            min="2023-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
