import React from 'react';
import Transaction from './Transaction';
function TransactionList({ transactions, handleDeleteTransaction, handleAddForm}) {
  const deleteTransaction = async (transId) => {
    console.log(transId);
    try {
      const res = await fetch("http://localhost:3000/transactions" + transId, {
        method: "DELETE",
      });
      handleDeleteTransaction(transId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <table onAddItem= {handleAddForm} className='ui celled striped padded table'>
      <tbody>
        <tr>
          <th>
            <h3 className='ui center aligned header'>Date</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Description</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Category</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Amount</h3>
          </th>
          <th><h3 className='ui center aligned header'>Delete</h3></th>
        </tr>
        {transactions.map((transaction, idx) => {
          return (
            <Transaction
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            />
          );
        })}
           </tbody>
    </table>
  );
}
export default TransactionList