import React from 'react';

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

export default Show;