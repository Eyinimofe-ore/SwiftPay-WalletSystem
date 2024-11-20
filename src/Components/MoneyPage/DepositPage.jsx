import React, { useState } from 'react';
import { depositMoney } from '../../Apicalls'; // Import your API call
import './DepositPage.css'; // Create CSS for styling
import Layout from '../../Layout/Layout';
import { useNavigate } from 'react-router-dom';



const DepositPage = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleDeposit = async () => {
    const user_id = Number(localStorage.getItem('userid')); 
    if (!amount || isNaN(amount) || amount <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }

    try {
      const response = await depositMoney(Number(amount), user_id);
      if (response.error) {
        setMessage(response.message);
      } else {
        window.location.href=response.authorization_url
        setMessage('Deposit successful!');
        setAmount('');
      }
    } catch (error) {
      setMessage('An error occurred while depositing money.');
    }
  };

  return (
   
    <Layout>
    <div className="deposit-page">
    <button className="back-button" onClick={() => navigate('/wallet')}>
        &#8592; Back to Wallet
      </button>
      <h2>Deposit Money</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleDeposit}>Deposit</button>
      {message && <p className="message">{message}</p>}
    </div>
    </Layout>
  
  
  );
};

export default DepositPage;
