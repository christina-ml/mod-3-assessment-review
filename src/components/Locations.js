import { Component } from "react";

class Locations extends Component {
    constructor(){
        super();

        this.state = {
            locations: [],
        }
    }

    componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res=>res.json())
            .then((data=>{
                this.setState({
                    locations: data,
                })
            }))
    }

    render(){
        return(
            <div className="locations">
                <h1>List of Locations</h1>
                <button>Show Locations</button>
            </div>
        )
    }
}

export default Locations;