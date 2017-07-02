import React from 'react';
import ReactDOM from 'react-dom';

class Inputfeld2 extends React.Component{

constructor(){
super();
this.state = {
fieldname: '',
fieldalter: ''
}; //state constructor

this.handleChangeName = this.handleChangeName.bind(this);
this.handleChangeAlter = this.handleChangeAlter.bind(this);
this.submitAlert = this.submitAlert.bind(this);
}//constructor

handleChangeName(event){
let value = event.target.value;
this.setState({fieldname: value});
console.log(this.state.fieldName);
}

handleChangeAlter(event){
let value = event.target.value;
this.setState({fieldalter : value});
console.log(this.state.fieldalter);
}

submitAlert(){
alert('Dein Name: ' + this.state.fieldname + ' dein Alter: ' + this.state.fieldalter);
}

render(){

return(
<div>
<form onSubmit={this.submitAlert}>
<input id='name' value={this.state.fieldname} onChange={this.handleChangeName}></input>
<input id='alter' value={this.state.fieldalter} onChange={this.handleChangeAlter}></input>
<input type='submit' value='Absenden'></input>
</form>
</div>
)//return

}//render

}//class

export default Inputfeld2;
