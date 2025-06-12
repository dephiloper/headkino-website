import React, { FC } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import HomeOld from '../pages/Home/index_old'
import Team from '../pages/Team'
import Games from '../pages/Games'

const RouteStack: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/games" element={<Games />} />

        <Route path="/old" element={<HomeOld />} />
        {/* not found routes will hit here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default RouteStack
