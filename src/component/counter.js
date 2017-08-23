import React , {Component} from 'react'


class Counter extends Component{

singleIncUpdate(){
this.props.increamentUpdate(1)
}
singleDecUpdate(){
this.props.decreamentUpdate(1)
}
updateIncWithValue(){
    this.props.increamentUpdate(parseInt(this.refs.input.value))
    this.refs.input.value = ""
}
updateDecWithValue(){
    this.props.decreamentUpdate(parseInt(this.refs.input.value))
    this.refs.input.value = ""
}

render(){
    console.log(typeof(this.props.counter),"state")
    console.log(this.props.counter,"state")
    
    return(
        <div>
            <h1>{this.props.counter}</h1>
            
            <input type="text" ref='input'/> <br/><br/>
            <button onClick={this.singleIncUpdate.bind(this)}>Single Increament</button>    
            <button onClick={this.updateIncWithValue.bind(this)}>Increament with Value</button> <br/>   
            <button onClick={this.singleDecUpdate.bind(this)}>Single Decreament</button>    
            <button onClick={this.updateDecWithValue.bind(this)}>Decreament with Value</button>     

        </div>    
    )
}

}
export default Counter;