import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transaction, search }) {
  const searchedList = transaction.filter((everyTransaction) =>
    everyTransaction.description.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(transaction)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {searchedList.map((transaction) => (
          <Transaction
            key={transaction.id}
            date={transaction.date}
            category={transaction.category}
            amount={transaction.amount}
            description={transaction.description}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
