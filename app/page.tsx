import { currentUser } from '@clerk/nextjs/server';
import Header from '@/components/Header';
import Guest from '@/components/Guest';
import AddTransaction from '@/components/AddTransaction';
export const dynamic = "force-dynamic";

import Balance from '@/components/Balance';
import IncomeExpense from '@/components/IncomeExpense';
import TransactionList from '@/components/TransactionList';


const HOMEPAGE = async() => {
    const user = await currentUser();
 if (!user) {
    return <Guest />;
  }
  return ( <main> 
    
     <Header/>
      <h2>Welcome, {user.firstName}</h2>
       <Balance />
         <IncomeExpense />
         <AddTransaction />
       
         <TransactionList />
  </main> );
}
 
export default HOMEPAGE;
