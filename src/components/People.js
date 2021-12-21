import { useEffect, useState } from "react";

const People=()=>{
    const [ people, setPeople ] = useState([]);
    const [ personInput, setPersonInput ] = useState('')
    const [ foundPerson, setFoundPerson ] = useState(null)  // null or empty object - null to start off as falsy

    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res=>res.json())
            .then((data)=>{
                setPeople(data)
            })
    }, []);

    const handlePersonInput=(e)=>{
        setPersonInput(e.target.value)
    }

    const handleSubmit=()=>{
        let result = people.find(person=>{
            return person.name.toLowerCase() === personInput.toLowerCase();
        })
        setFoundPerson(result);
    }

    return (
        <div className="people">
            <h1>Search for a Person</h1>
            <input 
                placeholder="Find Your Person"
                type="text"
                value={ personInput }
                onChange={ handlePersonInput }
            />
            <button onClick={ handleSubmit }>Submit</button>
            { foundPerson && 
                <div>
                    <h3>Name: {foundPerson.name}</h3>
                    <h3>Age: {foundPerson.age}</h3>
                    <h3>Gender: {foundPerson.gender}</h3>
                </div>
            }
            { foundPerson === undefined && 
                <div>
                    <h3>Not Found</h3>
                </div>
            }
        </div>
    )
}

export default People;