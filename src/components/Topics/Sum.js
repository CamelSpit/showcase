import React, {Component} from "react";



class Sum extends Component {
    constructor () {
        super()
        this.state = {
            number1:0,
            number2:0,
            sum:null
        }
    }

    updateNum1(num){
        this.setState({
            number1:Number(num)
        })
    }
    updateNum2(num){
        this.setState ({
            number2:Number(num)
        })
    }
    sum(){
        var tempSum = this.state.number1+this.state.number2;
        this.setState({
            sum:tempSum
        })
    }

    render () {
        return (
            <div className ="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={event => this.updateNum1(event.target.value)}/>
                <input className="inputLine" onChange={event => this.updateNum2(event.target.value)}/>
                <button className="confirmationButton" onClick={event => this.sum()}/>
                <span className="resultsBox">{JSON.stringify(this.state.sum,null, 10)}</span>
            </div>
        );
    }
}

export default Sum;