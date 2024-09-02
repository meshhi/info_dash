import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, HashRouter, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom'
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

  // preloading pictures
  const [isLoading, setLoading] = useState<boolean>(true);
  const baseDomain = 'https://aw-demo.ru/aw-bucket/widget_files/14382/'

  useEffect(() => {
    const imgs = [
      baseDomain + 'greetings_tableau.png',
      baseDomain + 'greetings_bg.png',
      baseDomain + 'can_left.png',
      baseDomain + 'can_right.png',
      baseDomain + 'bg_what_can.png',
      baseDomain + 'restrictions_bottom.png',
      baseDomain + 'bg_briefly.png',
      baseDomain + 'aw_briefly.png',
      baseDomain + 'bg_about_sources.png',
      baseDomain + 'bg_about_models.png',
    ]

    // @ts-ignore
    const cacheImgs = async (srcArray) => {
      console.log('preload started')
      // @ts-ignore
      const promises = await srcArray.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          console.log('laoding')
          img.src = src;
          // @ts-ignore
          img.onload = resolve();
          // @ts-ignore
          img.onerror = reject();
        });
      });

      await Promise.all(promises);
      setLoading(false)
      console.log('preload finished')
    }

    cacheImgs(imgs);
  }, [])

  return (
    isLoading
      ? 'preloading'
      :
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
  <MemoryRouter>
    <AnimatePresence>
      <RoutesWithAnimation></RoutesWithAnimation>
    </AnimatePresence>
  </MemoryRouter>
)
