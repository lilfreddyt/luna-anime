import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import Navbar from "../components/Navbar";
import './Animepage.css'

function Animepage() {
    const {id} = useParams();
    const [anime, setAnime] = useState(null);
    async function getAnime() {
        const url = "https://api.tenrai.org/v1/anime/" + id;
    
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    useEffect(() => {
        async function loadData() {
            const data = await getAnime();
            setAnime(data.data);
            console.log(anime);
        }
        loadData();
    }, [])
    if (anime === null) {
        return;
    }
    return(
        <>
            <Navbar/>
            <div className="anime-info">
                <div>
                    <p>{anime.title}</p>
                    <img src={anime.images.webp.large_image_url}></img>
                    <div>
                        <p>{anime.type}</p>
                        <p>{anime.aired.prop.from.year + "-" + anime.aired.prop.to.year}</p>
                    </div>
                    <p>Episodes: {anime.episodes}</p>
                    <p>Score: {anime.score}/10 on MAL</p>
                </div>
                <div className="synopsis">
                    <p>{anime.synopsis}</p>
                </div>
            </div>
        </>
    )
}

export default Animepage