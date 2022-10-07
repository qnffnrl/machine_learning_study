import React, {Component} from 'react';

class Class extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        //Prototype
        var Count = (function(){

            function Count(num){
                this.number = num;
            }

            Count.prototype.shownum = function(){
                console.log("Prototype :", this.number);
            };

            return Count;

        }());

        var cnt = new Count('100');
        cnt.shownum();
        /**************************************************************************/



        
        //Class
        class Count2{
            constructor(num){
                this.number = num;
            }
            shownum(){
                console.log("Class :", this.number);
            }
        }
        var cnt2 = new Count2(200);
        cnt2.shownum();
        /**************************************************************************/
    }

    render(){
        return(
            <div className='myTag'>
                <h2>Class Component</h2>
            </div>
        );
    }
    
}

export default Class;