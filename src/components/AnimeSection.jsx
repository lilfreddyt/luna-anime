import "./AnimeSection.css"
import AnimeList from "./AnimeList";
import {useState, useEffect} from "react";


function AnimeSection(props) {
    const [start, setStart] = useState(0);
    function nextAnime(direction) {
        if (direction === "right") {
            if (start === 20) {
                setStart(0);
            }
            else {
                setStart(start + 5);
            }
        }
        if (direction === "left") {
            if (start === 0) {
                setStart(20);
            }
            else {
                setStart(start - 5);
            }
        }
    
    }
    return(
        <div className="anime-section">
            <p>{props.title}</p>
            <div className="anime-list">
                <button onClick={() => {nextAnime("left")}}>←</button>
                <AnimeList type={props.type} start={start} end={start + 5}/>
                <button onClick={() => {nextAnime("right")}}>→</button>
            </div>
        </div>
    );
}

export default AnimeSection