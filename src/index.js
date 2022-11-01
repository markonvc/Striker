import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { SlotContextProvider } from './context/SlotContext';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <SlotContextProvider>
        <App />
    </SlotContextProvider>
);
