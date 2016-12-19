import React from 'react';
import ReactDOM from 'react-dom';

class Panel extends React.Component{
    constructor(){
        super();
        this.state = {
            number: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        
        this.setState({number: this.state.number+1});
    }

    
    render(){
        return (
            <div>
                <Show number={this.state.number} />
                <br />
                <Btn onClick={this.handleClick}  />
            </div>
        );
    }
}

class Show extends React.Component{
    
    render(){
        //es6 destructor
        //eq: let number = this.props.number;
        let {number} = this.props;
        return (
            <span>
                {number}
            </span>
        );
    }
}

class Btn extends React.Component{


    render(){
        return (
            <button onClick = {this.props.onClick} >
                Click
            </button>
        );
    }
}


ReactDOM.render(
    <div>
      <Panel />
    </div>
    , document.getElementById('app'));
