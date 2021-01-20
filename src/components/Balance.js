import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { getBalance } = useContext(GlobalContext);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{getBalance()}</h1>
    </>
  )
}

export default Balance;
