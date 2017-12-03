import React, {Component} from "react";

class Palindrome extends Component {

    constructor(){
        super()
        this.state = {
            userInput : "",
            palindrome: ""
        }
    }

    updateInput(newString){
        this.setState({
            userInput:newString
        })
    }

    solve(){
        var tempArray = [];
        var nuString = "";
        console.log(this.state.userInput);
        tempArray = this.state.userInput.split("");
        nuString = tempArray.reverse().join("");
        console.log(nuString);
        if (this.state.userInput === nuString) {
            this.setState({
                palindrome : true
            })
        }
        else {
            this.setState({
                palindrome: false
            })
    
        }
    }

    render () {
        return (
          <div className="puzzleBox filterStringPB">
              <h4>Palindrome</h4>
              <input className="inputLine" onChange={event => this.updateInput(event.target.value)}/>
              <button className="confirmationButton" onClick = {event => this.solve()}/>
              <span className="resultsBox">{JSON.stringify(this.state.palindrome,null,10)}</span>
          </div>
        )
    }
}

export default Palindrome;