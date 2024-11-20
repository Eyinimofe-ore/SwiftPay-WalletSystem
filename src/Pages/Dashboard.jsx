import React from 'react';
import Layout from "../Layout/Layout";
import { Outlet } from 'react-router-dom'; // Import Outlet

function Dashboard() {
  return (
    <Layout>
      <Outlet /> {/* Renders the Overview component by default */}
    </Layout>
  );
}

export default Dashboard;