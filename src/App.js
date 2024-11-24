import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Layout/Homepage';
import Dashboard from './Pages/Dashboard';
import Overview from './Pages/Overview';
import Wallet from './Pages/Wallet';
import History from './Pages/History';
import Account from './Pages/Account';
import Support from './Pages/Support';
import LoginSignup from './Components/LoginSignup';
import DepositPage from './Components/MoneyPage/DepositPage';
import SendMoneyPage from './Components/MoneyPage/SendMoneyPage';
import Contact from './Components/Contact/Contact';
import Auth from './Auth'; // Import the Auth component
import { config } from './Services';


function App() {
  const { dashboard, overview, wallet, history, account, support ,sendMoney,deposit,pay,walletLogin,contact} = config.routeconfig;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path={walletLogin} element={<LoginSignup />} />
          <Route path={contact}element={<Contact />} />

          {/* Protected Routes */}
          <Route element={<Auth />}>
            <Route path={sendMoney} element={<SendMoneyPage />} />
            <Route path={deposit} element={<DepositPage />} />
            <Route path={pay} element={<Overview />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Overview />} /> {/* Default content */}
            </Route>
            <Route path={dashboard} element={<Dashboard />} />
            <Route path={overview} element={<Overview />} />
            <Route path={wallet} element={<Wallet />} />
            <Route path={history} element={<History />} />
            <Route path={account} element={<Account />} />
            <Route path={support} element={<Support />} />
         

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
