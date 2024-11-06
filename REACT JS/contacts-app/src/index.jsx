import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/contact/ContactApp';

import './assets/css/style.css';
 
const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);