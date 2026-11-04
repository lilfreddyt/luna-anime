import "./AnimeList.css"
import AnimeCard from "./AnimeCard";
import { useState, useEffect } from "react"

async function getAnimeByType(type) {
    let url = "https://api.tenrai.org/v1/"
    switch (type) {
        case "popular":
            url += "top/anime?filter=bypopularity"
            break;
        case "current-season":
            url += "seasons/now";
            break;
        case "top":
            url += "top/anime";
            break;
        default:
            console.log("Invalid anime type!!!");
            break;
    }
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    }
    catch (error) {
        console.log(error);
    }
}

function AnimeList(props) {
    const [animeList, setAnimeList] = useState([]);
    let start = props.start;
    let end = props.end;
    useEffect(
        () => {
            async function loadData() {
                const data = await getAnimeByType(props.type);
                setAnimeList(data);
            }
            loadData();
        }, []
    )
    return(
        <div className="anime-list">
            {
                animeList.slice(start, end).map((anime) => {
                    return(
                        <AnimeCard 
                        key ={anime.mal_id}
                        id={anime.mal_id}
                        img={anime.images.webp.large_image_url}
                        title={anime.title}
                        />
                    )
                })
            }
        </div>
    );
}

export default AnimeList