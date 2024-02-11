import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Greetings } from './components/Slides/Greetings.tsx'
import { WhatYouCan } from './components/Slides/WhatYouCan.tsx'
import { BaseContainer } from './components/Slides/BaseContainer.tsx'
import { AnimatePresence } from 'framer-motion'
import { Restrictions } from './components/Slides/Restrictions.tsx'
import { BrieflyAbout } from './components/Slides/BrieflyAbout.tsx'
import { AboutSources } from './components/Slides/AboutSources.tsx'
import { AboutModels } from './components/Slides/AboutModels.tsx'
import { AboutWidgets } from './components/Slides/AboutWidgets.tsx'
import { BackToDemo } from './components/Slides/BackToDemo.tsx'
import { Questions } from './components/Slides/Questions.tsx'
import { AfterDemo } from './components/Slides/AfterDemo.tsx'

const RoutesWithAnimation = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Greetings />}>
      </Route>
      <Route path="/slides" element={<BaseContainer />}>
        <Route path="/slides/2" element={<WhatYouCan />} />
        <Route path="/slides/3" element={<Restrictions />} />
        <Route path="/slides/4" element={<BrieflyAbout />} />
        <Route path="/slides/5" element={<AboutSources />} />
        <Route path="/slides/6" element={<AboutModels />} />
        <Route path="/slides/7" element={<AboutWidgets />} />
        <Route path="/slides/8" element={<BackToDemo />} />
        <Route path="/slides/9" element={<Questions />} />
        <Route path="/slides/10" element={<AfterDemo />} />
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
