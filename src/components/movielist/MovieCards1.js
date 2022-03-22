import React, {useState, useEffect} from "react";
import axios from "axios";

const MovieCards1 = () => {

    const [movieProfiles, setMovieProfiles] = useState([]);

    const fetchMovieProfiles =  () => {
        const retrieveToken = JSON.parse(localStorage.getItem("token"))["jwt-token"];

        axios.get("http://api.movieroll.co.uk/api/v1/movie/curated?listNumber=1", {
            headers: {
                Authorization: 'Bearer ' + retrieveToken
              }
        }).then(res => {

            setMovieProfiles(res.data);
        });
    };


    useEffect(() => {
        fetchMovieProfiles();
    }, []);

    return movieProfiles.map((movieProfile, index) => {
        var weburl = "https://image.tmdb.org/t/p/original/".concat(movieProfile.poster);
        return (
            <>
            <div className="card"><img src={weburl} className="poster" />
            <div className="title">
            {movieProfile.title}
            </div>
            <div className="release">
            {movieProfile.releaseDate}
            </div>
            </div>
            
            </>
        )
    })
    
};

export default MovieCards1;
