import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transaction,search, setSearch }) {
// console.log(transaction)
  return (
    <div>
      <Search setSearch={setSearch} />
      <AddTransactionForm />
      <TransactionsList 
          transaction={transaction} search={search}    
      />
    </div>
  );
}

export default AccountContainer;
