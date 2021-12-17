import { Component, useState, useEffect } from "react";

const Movies=()=>{
    const [ movies, setMovies ] = useState([]);
    const [ selectedMovie, setSelectedMovie ] = useState({});

    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res=>res.json())
            .then(data=>{
                setMovies(data);
            })
    }, [])

    const handleDropdownChange=(event)=>{
        let foundMovie = movies.find((movie)=>{
            return movie.title === event.target.value
        })
        // if truthy, set it as an empty object again.
        setSelectedMovie(foundMovie || {});
    }

    let optionElArr = movies.map((movie)=>{
        return <option value={movie.title}>{movie.title}</option>
    })

    return(
        <div className="movies">
            <h1>Select a Movie</h1>
            <select onChange={handleDropdownChange}>
                <option></option>
                { optionElArr }
            </select>

            { selectedMovie.title && 
                <div>
                    <h3>Title: {selectedMovie.title}</h3>
                    <div>Release Date: {selectedMovie.release_date}</div>
                    <div>Description: {selectedMovie.description}</div>
                </div>
            }

        </div>
    )
}

export default Movies;