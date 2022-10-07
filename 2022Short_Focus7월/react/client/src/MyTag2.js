import React, {Component} from 'react';

class MyTag2 extends Component{

    state = {
        count : 1
    };

    countUp = () => {
        this.setState({
            count : this.state.count + 1
        });
    };
    countDown = () => {
        this.setState({
            count : this.state.count - 1
        });
    }

    render(){
        return(
            <div className='myTag'>
                <h3><u>User Define Component 2</u></h3>
                <div>{this.state.count}</div>
                <button onClick={this.countUp}>Count Up!!!</button>
                <button onClick={this.countDown}>Count Down!!!</button>
            </div>
        )
    }
}

export default MyTag2;