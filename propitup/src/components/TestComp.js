import React,{Component} from "react";
class TestComp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            age:this.props.age
        };  
    };
    render() {
      
        return(
            <div>
           <h1>my name is {this.props.firstName} {this.props.lastName}</h1>
            <p>my age is {this.state.age}</p>
            <button onClick={ () => {this.setState({ age:this.state.age+=1 }) }}>add</button>
            </div>
        );
    }
}
export default TestComp;
