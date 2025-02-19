import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { PublicRoutes } from './app/routes/PublicRoutes';
import { CustomThemeProvider } from './app/context/ThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <CustomThemeProvider>
    <React.StrictMode>
      <PublicRoutes />
    </React.StrictMode>
  </CustomThemeProvider>

);



