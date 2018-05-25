import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = { result:0 , num1:"", num2:""};
    this.setNum1 = this.setNum1.bind(this);
    //your code here
  }

  //your code here
  setNum1(e) {
    let num1;
    if(e.target.value) num1 = parseInt(e.target.value);
    else num1 = "";
    this.setState( {num1: num1});
    console.log(num1);
  }


  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange = {this.setNum1} value = {this.state.num1}></input>
        <input value = {this.state.num2}></input>
        //your code will replace this
      </div>
    );
  }
}

export default Calculator;
