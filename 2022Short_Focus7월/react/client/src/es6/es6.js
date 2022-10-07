import React from "react";

export default class ES6 extends React.Component {

    constructor(pros){
        super(pros);
        this.state = {userName : "Gil Dong"};
    }

    componentDidMount() {
        console.log('Component Test')
    }

    myFunc(str){
        console.log("My Function", str);
    }

    sum(i, j){
        return i+j;
    }

    render(){
        this.myFunc("Hong");
        let num = this.sum(2, 3);
        console.log(num);
        return(
            <div className="myTag">
                <p>Ecma Script 6</p>
                <p>{num}</p>
                <p>{this.state.userName}</p>
            </div>
        );
    }

}

