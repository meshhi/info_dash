import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Greetings } from './components/Slides/Greetings.tsx'
import { WhatyouCan } from './components/Slides/WhatYouCan.tsx'
import { BaseContainer } from './components/BaseContainer.tsx'
import { AnimatePresence } from 'framer-motion'

const RoutesWithAnimation = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<BaseContainer />}>
        <Route path="/" element={<Greetings />} />
        <Route path="/2" element={<WhatyouCan />} />
      </Route>
    </Routes>
  );
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <RoutesWithAnimation></RoutesWithAnimation>
      </AnimatePresence>
  </BrowserRouter>
  </React.StrictMode>,
)
