import { Component } from "react";

class Locations extends Component {
    constructor(){
        super();

        this.state = {
            locations: [],
            displayLocations: false,
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

    handleToggleLocations=()=>{
        this.setState=({
            displayLocations: !this.state.displayLocations,
        })
    }

    
    
    render(){
        let locationsElArr = this.state.locations.map((location)=>{
            return <li>{location.name}</li>
        })

        // let buttonText;
        // if (this.state.displayLocations){
        //     buttonText = "Hide";
        // } else {
        //     buttonText = "Show";
        // }

        return(
            <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={this.handleToggleLocations}>{this.state.displayLocations ? "Hide" : "Show"} Locations</button>
                { this.state.displayLocations && 
                    <ul>
                        {locationsElArr}
                    </ul>
                }
            </div>
        )
    }
}

export default Locations;