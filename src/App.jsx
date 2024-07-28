import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ShowGallery from './components/Gallery/ShowGallery.jsx'
import Layout from '../src/pages/Layout.jsx'
import MostPopularPlaces from './components/MostPopular/MostPopularPlaces.jsx'
import SevenWonders from './components/SevenWonders/SevenWonders.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
const App = () => {
  return (
    <>
       <BrowserRouter>
       <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/mostPopularPlaces' element={<MostPopularPlaces/>}/>
            <Route path='/showGallery' element={<ShowGallery/>}/>
            <Route path='/sevenWonders' element={<SevenWonders/>}/> 
          </Route>
            <Route path="*" element={<PageNotFound/>}/> 
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
