import React, {Component} from "react";
   
class FilterString extends Component {

    constructor(){
        super()
        this.state = {
            unFilteredArray : [
            "You can't take the sky from me",
            "I aim to misbehave",
            "Sudden but inevitable betrayal",
            "Get off my gorram ship!"
            ],
            userInput : "",
            filteredArray: []
        }
    }

    updateInput(newString){
        this.setState ({
            userInput:newString
        })
    }

    solve(){
        var tempArray = [];
        tempArray = this.state.unFilteredArray.filter( string => string.includes(this.state.userInput))
        this.setState({
            filteredArray : tempArray
        })
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray,null,10)}</span>
            <input className="inputLine" onChange= {(event)=> this.updateInput(event.target.value)}/>
            <button className="confirmationButton" onClick={event => this.solve()}/>
            <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        );
    }
}

export default FilterString;