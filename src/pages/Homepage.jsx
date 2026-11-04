import {Routes, Route} from "react-router-dom"
import Navbar from '../components/Navbar'
import AnimeSection from '../components/AnimeSection'
import Searchbar from '../components/Searchbar'

function Homepage() {
  return(
    <>
      <Navbar/>
      <Searchbar/>
      <AnimeSection title="Anime This Season" type="current-season"/>
      <AnimeSection title="Top Anime of All Time" type="top"/>
      <AnimeSection title="Most Popular" type="popular"/>
    </>
  );
}

export default Homepage
