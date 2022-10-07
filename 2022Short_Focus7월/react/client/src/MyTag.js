import React, {Component} from 'react';

class MyTag extends Component {

    state = {
        hello : "This is State Data",
    };

    handleChange = () => {
        this.setState({
            hello : "This is Changed State Data",
        });
    }

    render(){
        return (
            <div className='myTag'>
                <h3><em>User Define Component 1</em></h3>
                <p>{this.state.hello}</p>
                <button onClick={this.handleChange}>State Data Chnage!!</button>
            </div>
        )
        
    }

}

export default MyTag;