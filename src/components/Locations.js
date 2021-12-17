import { Component, useState, useEffect } from "react";

const Locations=()=>{
    const [ locations, setLocations, ] = useState([]);
    const [ display, setDisplay ] = useState(false)

    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res=>res.json())
            .then(data=>{
                setLocations(data)
            })
    }, []);

    const handleToggleLocations=()=>{
        setDisplay(!display)
    }

    let locationsElArr = locations.map((location)=>{
        return <li>{location.name}</li>
    })

    return(
        <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={handleToggleLocations}>{display ? "Hide" : "Show"} Locations</button>
                { display &&
                    <ul>
                        { locationsElArr }
                    </ul>
                }
            </div>
    )
}

export default Locations;