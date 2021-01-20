import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State

const initialState = {
  transactions: []
}

//create context

export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function  deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function  addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  function getBalance(){
    if(state.transactions !=null || state.transactions.length>0){
      return state.transactions.reduce((totalBalance,transaction)=>totalBalance+transaction.amount,0);
    }
   return 0;
  }
  
  function getIncome(){
    if(state.transactions !=null || state.transactions.length > 0){
      let totalIncome = state.transactions.reduce((totalBalance, transaction)=>{
        if(transaction.amount > 0){
         return totalBalance+transaction.amount
        }
        else{
          return totalBalance;
        }
      },0);
      return totalIncome;
    }
   return 0;
  }

  function getExpense(){
    if(state.transactions != null || state.transactions.length > 0){
      let totalExpense = state.transactions.reduce((totalBalance,transaction)=>{
        if(transaction.amount < 0){
         return totalBalance+transaction.amount
        }
        else{
          return totalBalance;
        }
      },0);
      return totalExpense;
    }
   return 0;
  }

  return(<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
    getBalance,
    getExpense,
    getIncome
  }}>
    {children}
    </GlobalContext.Provider>)
}
