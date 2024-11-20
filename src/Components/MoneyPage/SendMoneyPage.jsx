import React, { useState, useEffect } from 'react';
import { sendMoney } from '../../Apicalls'; 
import './SendMoneyPage.css'; 
import { useNavigate } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import ReactModal from 'react-modal'; 

const SendMoneyPage = () => {
  const [senderId, setSenderId] = useState('');
  const [receiverUsername, setReceiverUsername] = useState('');
  const [amount, setAmount] = useState('');
  const [walletPin, setWalletPin] = useState('');
  const [message, setMessage] = useState('');
  const [receipt, setReceipt] = useState(null); // State to store receipt details
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const storedSenderId = localStorage.getItem('userid'); // Retrieve senderId from local storage
    if (storedSenderId) {
      setSenderId(storedSenderId);
    } else {
      setMessage('Sender ID not found.');
    }
  }, []);

  const handleSendMoney = async () => {
    if (!senderId || !receiverUsername || !amount || !walletPin) {
      setMessage('Please fill out all fields.');
      return;
    }

    try {
      const response = await sendMoney(Number(senderId), receiverUsername, Number(amount), walletPin);
      if (response.error) {
        setMessage(response.message);
      } else {
        // Set receipt details and open modal
        setReceipt({
          senderId,
          receiverUsername,
          amount,
          date: new Date().toLocaleString(),
        });
        setIsModalOpen(true);
        setMessage('');
        setReceiverUsername('');
        setAmount('');
        setWalletPin('');
      }
    } catch (error) {
      setMessage('An error occurred while sending money.');
    }
  };

  return (
    <Layout>
      <div className="send-money-page">
        <button className="back-button" onClick={() => navigate('/wallet')}>
          &#8592; Back to Wallet
        </button>
        <h2>Send Money</h2>
        <input
          type="text"
          value={receiverUsername}
          onChange={(e) => setReceiverUsername(e.target.value)}
          placeholder="Receiver Username"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="password"
          value={walletPin}
          onChange={(e) => setWalletPin(e.target.value)}
          placeholder="Wallet PIN"
        />
        <button onClick={handleSendMoney}>Send Money</button>
        {message && <p className="message">{message}</p>}

        {/* Receipt Modal */}
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Transaction Receipt"
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
              width: '80%',
              maxWidth: '500px',
            },
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
          }}
        >
          {receipt && (
            <div className="receipt">
              <h2>Money has been sent</h2>
              <h3>Transaction Receipt</h3>
              <p><strong>Sender ID:</strong> {receipt.senderId}</p>
              <p><strong>Receiver Username:</strong> {receipt.receiverUsername}</p>
              <p><strong>Amount:</strong> ₦{receipt.amount}</p>
              <p><strong>Date:</strong> {receipt.date}</p>
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
          )}
        </ReactModal>
      </div>
    </Layout>
  );
};

export default SendMoneyPage;
