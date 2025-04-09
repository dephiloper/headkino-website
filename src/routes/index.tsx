import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NotFound from '../pages/NotFound'
import HomeNew from '../pages/Home/index_new'
import Home from '../pages/Home'


const RouteStack: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<HomeNew />} />


        {/* not found routes will hit here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteStack
