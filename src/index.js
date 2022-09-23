import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { ThemeProvider } from 'styled-components';
import { theme } from './Utils/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="kinopoisk">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
