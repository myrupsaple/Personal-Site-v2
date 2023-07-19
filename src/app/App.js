import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BasePage from './BasePage';

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<BasePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;