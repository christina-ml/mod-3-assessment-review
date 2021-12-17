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
        setSelectedMovie(foundMovie);
    }

    let optionElArr = movies.map((movie)=>{
        return <option value={movie.title}>{movie.title}</option>
    })

    return(
        <div className="movies">
            <select onChange={handleDropdownChange}>
                <option></option>
                { optionElArr }
            </select>

            <div>Title: {selectedMovie.title}</div>
            <div>Release Date: {selectedMovie.release_date}</div>
            <div>Description: {selectedMovie.description}</div>

        </div>
    )
}

export default Movies;