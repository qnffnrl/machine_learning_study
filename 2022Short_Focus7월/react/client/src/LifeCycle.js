import React, {Component} from 'react';

class LifeCycle extends Component{

    //1
    constructor(props){
        super(props);
        this.state = {}; //Class State Information
        console.log("Constructor Call")
        console.log(props.userName)
    }

    //2
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps Call", props);
        console.log("State Information", state);
        return {myState : props.userName};
    }

    //3
    //rendering
    render(){
        console.log("render Call");
        return(
            <div className='myTag'>
                <h2>Component Test</h2>
            </div>
        )
    }

    //4
    componentDidMount() {
        /**************************************************************************/
        // Javascript Sector
        console.log("componentDidMount Call", this.state.myState);
        /**************************************************************************/
    }

}

export default LifeCycle;