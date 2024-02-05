import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Greetings } from './components/Slides/Greetings.tsx'
import { WhatyouCan } from './components/Slides/WhatYouCan.tsx'
import { BaseContainer } from './components/BaseContainer.tsx'
import { AnimatePresence } from 'framer-motion'

const RoutesWithAnimation = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Greetings />}>
      </Route>
      <Route path="/slides" element={<BaseContainer />}>
        <Route path="/slides/2" element={<WhatyouCan />} />
      </Route>
      
    </Routes>
  );
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <AnimatePresence>
        <RoutesWithAnimation></RoutesWithAnimation>
      </AnimatePresence>
    </HashRouter>
  </React.StrictMode>,
)
