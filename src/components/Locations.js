import { Component } from "react";

class Locations extends Component{
    constructor(){
        super();
        this.state = {
            locations: [],
            display: false
        }
    }

    componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    locations: data
                })
            })
    }

    handleToggleLocations=()=>{
        this.setState({
            display: !this.state.display,
        })
    }

    render(){
        let locationsElArr = this.state.locations.map((location)=>{
            return <li>{location.name}</li>
        })

        return(
            <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={this.handleToggleLocations}>{this.state.display ? "Hide" : "Show"} Locations</button>
                { this.state.display &&
                    <ul>
                        { locationsElArr }
                    </ul>
                }
            </div>
        )
    }
}

export default Locations;