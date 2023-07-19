import React from 'react';
import { createRoot } from 'react-dom/client';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

import './index.css';
import App from './app/App';
// import { colorPalette } from './components/custom-essentials';

const el = document.getElementById('root');
const root = createRoot(el);

// const theme = createTheme({
//     palette: colorPalette
// })

root.render(
    <React.StrictMode>
        {/* <ThemeProvider theme={theme}> */}
            <App />
        {/* </ThemeProvider> */}
    </React.StrictMode>
);