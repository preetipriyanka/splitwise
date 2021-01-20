export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      console.log(state.transactions.filter(transactions => transactions.id !==
        action.payload));
        console.log(state.transaction)
      return {
        ...state,
        transactions: state.transactions.filter(transactions => transactions.id !==
          action.payload)
      }

      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }

    default:
      return state
  }
}