import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import MostPopularPlaces from '../components/MostPopular/MostPopularPlaces'
import Arguments from '../components/Arguments/Arguments'
import ShowGallery from '../components/Gallery/ShowGallery'
import SevenWonders from '../components/SevenWonders/SevenWonders'
const Home = () => {
  return (
    <div>
      <Arguments/>
      <MostPopularPlaces/>
      <ShowGallery/>
      <SevenWonders/>
    </div>
  )
}

export default Home
