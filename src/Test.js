//custom react component 
//this import is needed for making a react component
import React from 'react';

class Test extends React.Component{
    render(){
        //this.props.greeting is an attribute passed by the ReactDOM.render
        return (
            <div>
                <h1> Hello this is a custom react component</h1>
                <h3>{this.props.greeting}</h3> 
            </div>
        );
    };
}

export default Test