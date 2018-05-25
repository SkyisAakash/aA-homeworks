import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = { result:0 , num1:"", num2:""};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.mult = this.mult.bind(this);
    this.div = this.div.bind(this);
    this.clear = this.clear.bind(this);
    //your code here
  }

  //your code here
  setNum1(e) {
    let num1;
    if(e.target.value) num1 = parseInt(e.target.value);
    else num1 = "";
    this.setState( {num1: num1});
    // console.log(num1);
  }
  setNum2(e) {
    let num2;
    if(e.target.value) num2 = parseInt(e.target.value);
    else num2 = "";
    // console.log(num2);
    this.setState( {num2: num2});
  }
  add(e) {
    e.preventDefault();
    this.setState( {result: this.state.num1 + this.state.num2 });
  }

  sub(e) {
    e.preventDefault();
    this.setState( {result: this.state.num1 - this.state.num2 });
  }

  mult(e) {
    e.preventDefault();
    this.setState( {result: this.state.num1 * this.state.num2 });
  }

  div(e) {
    e.preventDefault();
    this.setState( {result: this.state.num1 / this.state.num2 });
  }

  clear(e) {
    e.preventDefault();
    this.setState( {result: 0, num1: "", num2: "" });
  }
  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange = {this.setNum1} value = {this.state.num1}></input>
        <input onChange = {this.setNum2} value = {this.state.num2}></input>
        <button type = "button" name = "add" onClick = {this.add}>Add</button>
        <button type = "button" name = "sub" onClick = {this.sub}>Subtract</button>
        <button type = "button" name = "mult" onClick = {this.mult}>Multiply</button>
        <button type = "button" name = "div" onClick = {this.div}>Divide</button>
        <button type = "button" name = "clear" onClick = {this.clear}>Reset</button>
        //your code will replace this
      </div>
    );
  }
}

export default Calculator;
