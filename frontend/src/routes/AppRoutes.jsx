import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from '../components/auth/UserLogin';
import UserRegister from '../components/auth/UserRegister';
import PartnerLogin from '../components/auth/PartnerLogin';
import PartnerRegister from '../components/auth/PartnerRegister';
import Home from '../components/general/Home';
import CreateFood from '../components/food-partner/CreateFood';
import Saved from '../components/general/Saved';  
import BottomNav from '../pages/BottomNav';
import Profile from '../components/food-partner/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={ <UserLogin />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/partner/login" element={<PartnerLogin />} />
      <Route path="/partner/register" element={<PartnerRegister />} />
      <Route path="/" element={<><Home /><BottomNav /></>} />
      <Route path="/saved" element={<><Saved /><BottomNav /></>} />
      <Route path="/create-food" element={<CreateFood />} />
      <Route path="/food-partner/:id" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
