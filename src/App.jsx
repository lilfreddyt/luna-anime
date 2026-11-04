import {Routes, Route} from "react-router-dom"
import Animepage from './pages/Animepage'
import Homepage from "./pages/Homepage"
import SearchResultsPage from "./pages/SearchResultsPage"

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/anime/:title/:id" element={<Animepage/>}/>
        <Route path="/search" element={<SearchResultsPage/>}/>
      </Routes>
    </>
  );
}

export default App
