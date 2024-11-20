import React, { useState, useEffect } from 'react';
import './Overview.css'
import CreatePinModal from '../Components/CreatePinModal/CreatePinModal';
import { checkPinAvailability } from '../Apicalls'; // Adjust import based on your project structure
import Layout from '../Layout/Layout';



const Overview = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user_id, setUserId] = useState(null);

  // Fetch the user ID from local storage when the component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem('userid'); // Use 'userid' key
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  // Check PIN availability and open the modal if PIN is not set
  useEffect(() => {
    const checkPin = async () => {
      if (user_id) {
        const response = await checkPinAvailability(user_id);
        if (response.hasPin === false) {
          setModalOpen(true);
        }
      }
    };

    checkPin();
  }, [user_id]);//dependency array

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Layout>
      <div className="overview">
        <div>
        <h1 className='title'>WELCOME TO YOUR SWIFTPAY ACCOUNT</h1>
        </div>
        {/* Your overview content */}
        {user_id && (
          <CreatePinModal isOpen={isModalOpen} onClose={handleCloseModal} />
        )}
      </div>
    </Layout>
  );
};

export default Overview;
