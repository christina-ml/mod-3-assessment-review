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

    const handleDropdownChange=(e)=>{
        console.log(e.target.value)
        // setSelectedMovie()
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
        </div>
    )
}

export default Movies;