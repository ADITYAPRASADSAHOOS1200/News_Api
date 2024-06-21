import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NewsProvider } from './ContextApi/Context'; // Assuming this is correctly implemented
import Homepage from './Pages/Homepage.jsx';
import Details from './Pages/Details.jsx';


function App() {
  return (
    <NewsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </NewsProvider>
  );
}

export default App;

