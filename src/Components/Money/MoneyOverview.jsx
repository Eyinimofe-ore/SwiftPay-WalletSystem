import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './MoneyOverview.css';
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaEye, FaEyeSlash ,FaWallet} from "react-icons/fa";
import { getWalletBalance, getAllUserTransactions,getAllTransactions } from '../../Apicalls';
import { walletbalance } from '../../Apicalls';
import SendMoneyPage from '../MoneyPage/SendMoneyPage';
import DepositPage from '../MoneyPage/DepositPage';



function MoneyOverview() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [balanceVisible, setBalanceVisible] = useState(true);
  const user_id = localStorage.getItem('userid');

  useEffect(() => {
    const fetchData = async () => {
      if (user_id) {
        try {
          const balanceResponse = await getWalletBalance(user_id);
          setBalance(balanceResponse.data.balance);

          const transactionsResponse = await getAllUserTransactions(user_id);
          setTransactions(transactionsResponse.data.transactions);
        } catch (error) {
          console.error('Error fetching wallet data:', error);
        }
      }
    };

    fetchData();
  }, [user_id]);

  const [data, setData] = useState([]);
  const [recentTransactions, setRecentTransactions] = useState([]);
 // Fetch recent transactions
 const usercall = async () => {
  try {
 
    // Fetch recent transactions
    const resTransactions = await getAllTransactions(localStorage.getItem('userid'));
    if (resTransactions.status === 'success' && Array.isArray(resTransactions.transactions)) {
      // Sort transactions by date in descending order and get the top 3
      const sortedTransactions = resTransactions.transactions.sort((a, b) => new Date(b.transaction_date) - new Date(a.transaction_date));
      setRecentTransactions(sortedTransactions.slice(0, 3));
    } else {
      console.error('Expected an array but received:', resTransactions);
      setRecentTransactions([]);
    }
  } catch (e) {
    console.error(e);
  }
};

useEffect(() => {
  usercall();
  }, []);


  // Calling the walletbalance API
  const walletcall = async () => {
    try {
      var res = await walletbalance(localStorage.getItem('userid'));
      setData(res);
      console.log("data", data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    walletcall();
  }, []);

  var name = localStorage.getItem("username");

  const toggleBalanceVisibility = () => {
    setBalanceVisible(!balanceVisible);
  };

  return (
    <div className="wallet-container">
      <div className="column-left mleft">
        <div className="roww1">
          <h1>Welcome back, <span>{name}</span></h1>
        </div>
        <div className="roww2">
          <h2>Current Balance:</h2>
          <h1>
            {balanceVisible ? `₦${data.message}` : '*****   '}
            <button  onClick={toggleBalanceVisibility} className="toggle-visibility-btn">
              {balanceVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </h1>
        </div>
        <div className="roww3">
          <Link to="/deposit" className="action-item">
            <h2>Deposit Money</h2>
            <FaArrowAltCircleDown />
          </Link>
          <Link to="/send-money" className="action-item">
            <h2>Send Money</h2>
            <FaArrowAltCircleUp />
          </Link>
        </div>
      </div>
      <div className="column-right mright">
        <div className="t-header">
          <h1>Transactions</h1>
          <a href="/History">View More</a>
        </div>
        <div className="transactions-list">
        <div className="recent-transactions">
          {recentTransactions.length > 0 ? (
            recentTransactions.map((transaction, index) => (
              <div key={index} className="recent-transaction-item">
                <FaWallet className="wallet-icon" />
                <p>{transaction.transaction_type}</p>
                <p>Status: {transaction.status}</p>
                <p>Amount: {transaction.amount}</p>
                <p>Date: {new Date(transaction.transaction_date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No recent transactions available.</p>
          )}
        </div>
          
        </div>
      </div>
    </div>
  );
}

function MoneyOverviewPage() {
  return (
    <Routes>
      <Route path="/" element={<MoneyOverview />} />
      <Route path="/deposit" element={<DepositPage />} />
      <Route path="/send-money" element={<SendMoneyPage />} />
    </Routes>
  );
}

export default MoneyOverviewPage;
