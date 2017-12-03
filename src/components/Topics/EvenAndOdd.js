import React, { Component } from "react";

class EvenAndOdd extends Component {
    constructor () {
        super()
        this.state = {
            evenArray : [],
            oddArray : [],
            userInput : ""
        }
    
    }
    updateUser(newString){
        this.setState({
            userInput: newString
            })
    }
    
    solve(){
        var tempArray = [];
        var evens = [];
        var odds = [];
        tempArray = this.state.userInput.split(',');
        tempArray.map(entry => {
            if (entry%2===0){
                evens.push(entry); 
            }
            else {
                odds.push(entry);
            }
        })
        console.log(evens);
        this.setState({
            evenArray: evens.join(","),
            oddArray: odds.join(",")
        })
    }


    render () {
        console.log(this.state.evenArray);
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange ={(event)=> this.updateUser(event.target.value)}></input>
                <button className="confirmationButton" onClick = {() => this.solve()}></button>
                <span className="resultsBox">{this.state.evenArray}</span>
                <span className="resultsBox">{this.state.oddArray}</span>
            </div>
        );
    }
}

export default EvenAndOdd;