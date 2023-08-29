import './src/i18n/index'
import React from 'react';
import { AppContextProvider } from '@context/AppContext';
import { AppContent } from './AppContent';

export default function App() {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}





