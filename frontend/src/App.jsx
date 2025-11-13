import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/theme.css';
import './styles/auth.css';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;