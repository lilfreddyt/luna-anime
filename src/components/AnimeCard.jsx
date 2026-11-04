import {Link} from "react-router-dom"
import "./AnimeCard.css"

function AnimeCard(props) {
    return(
        <div className="anime-card">
            <Link key={props.id} to={"/anime/" + props.title + "/" + props.id}>
                <img src={props.img} alt="anime-cover"></img>
                <p className="title">{props.title}</p>
            </Link>
        </div> 
    );
}

export default AnimeCard