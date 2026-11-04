import { useSearchParams } from "react-router-dom"
import {useState, useEffect} from "react"
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import AnimeCard from "../components/AnimeCard";
import "./SearchResultsPage.css"


function SearchResultsPage() {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");
    const [animes, setAnimes] = useState([]);

    async function getAnimes() {
        const url = "https://api.tenrai.org/v1/anime?q=" + q;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        async function loadData() {
            const data = await getAnimes();
            setAnimes(data.data);
        }
        loadData();
    }, [q])
    console.log(animes);
    if (animes.length === 0) {
        return;
    }
    return(
        <>
            <Navbar/>
            <Searchbar/>
            <div className="search-results-page">
            {
                animes.map((anime) => {
                    return(
                        <AnimeCard title={anime.title} img = {anime.images.webp.large_image_url} id={anime.mal_id}/>
                    );
                })
            }
            </div>
        </>
    )
}

export default SearchResultsPage