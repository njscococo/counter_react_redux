import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as counterAction from '../actions/counterAction';
import Show from '../components/Show'
import Btn from '../components/Btn';

class Panel extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const { counterReducer, counterAction } = this.props;
        return (
            <div>
                <Show number={counterReducer} />
                <br />
                <Btn increment={counterAction.incrementAction} decrement={counterAction.decrementAction}  />
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        counterReducer: state.counterReducer
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        counterAction: bindActionCreators(counterAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Panel);