import {useState, useEffect} from 'react'
import './Searchresult.css'

function Searchresult(props) {
    console.log(props);
    return(
        <div className='search-result'>
            <p className='title'>{props.anime.title}</p>
            <p className='type'>{props.anime.type}</p>
            <img className="result-img" src={props.anime.images.webp.large_image_url}></img>
        </div>
    );
}

export default Searchresult