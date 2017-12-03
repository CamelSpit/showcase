import React, {Component} from "react";
import App from "../../App";

class FilterObject extends Component {
    constructor (){
        super()
        this.state = {
            unFilteredArray : [
                {name: "Mal",
                job: "captain",
                haircolor: "brown",
                attitude: "hard"    
                },
                {name: "Inara",
                job: "companion",
                appearance: "enchanting",
                attitude: "compassionate"
                },
                {
                name: "Jayne",
                job: "thug",
                favThing: "Vera",
                nickname: "Hero of Canton"
                },
                {
                name: "Wash",
                job: "pilot",
                hobby: "dinosaur betrayals",
                wife: "Zoe"
                }
            ],
            userInput:"",
            filteredArray : []
        }
       
    }

    updateInput(newString) {
        this.setState ({
            userInput: newString
        })
    }
    solve (){
        var tempArray=[];
        console.log(this.unFilteredArray);
        tempArray = this.state.unFilteredArray.filter(object => object.hasOwnProperty(this.state.userInput) 
        ) 
        this.setState({
            filteredArray : tempArray
        })
    }


    render(){
        return(
            <div className="puzzleBox filterObject.js">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray,null,10)}</span>
                <input className="inputLine" onChange = {(event) => this.updateInput(event.target.value)} />
                <button className= "confirmationButton" onClick = {(event)=> this.solve ()}/>
                <span className="resultsBox filterObjectPB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        );
    }
}

export default FilterObject;