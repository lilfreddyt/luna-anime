import {useState, useEffect} from 'react'
import './Searchbar.css'
import Searchresult from './Searchresult';
import { Link } from "react-router-dom";


function Searchbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    function search(event) {
        setSearchTerm(event.target.value);
    }

    function viewMoreResults() {
        if (searchResults.length > 0) {
            return  <Link to ={"/search?q=" + searchTerm}>
                        <div className='view-more'>View more</div>
                    </Link>
        }
        return null;
    }

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setSearchResults([]);
            return;
        }
        const timer = setTimeout(async () => {
            const url = "https://api.tenrai.org/v1/anime?q=";
            try {
                const response = await fetch(url + searchTerm);
                const data = await response.json();
                setSearchResults(data.data);
            }
            catch(error) {
                console.log(error);
            }
        }, 500)
        return () => {
            clearTimeout(timer);
        }
    }, [searchTerm])
    return(
        <div className="searchbar">
            <input type="search" onChange={search} placeholder='Search for anime'></input>
            <div className='search-results'>
                {
                    searchResults.slice(0, 4).map((result) => {
                        return (
                            <Link key={result.mal_id} to={"/anime/" + result.title + "/" + result.mal_id}>
                                <Searchresult anime={result}/>
                            </Link>
                        )
                    })
                }
                {viewMoreResults()}
            </div>
        </div>
    );
}

export default Searchbar