import React from 'react';
import './styles/global.css';
import 'leaflet/dist/leaflet.css'

import { AuthProvider } from './contexts/AuthContext'

import Routes from './Routes';


function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
