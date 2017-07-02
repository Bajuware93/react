import React from 'react';
import ReactDOM from 'react-dom';

class Inputfeld extends React.Component{

constructor(){
super();
this.state = {value: ''};
// This binding is necessary to make `this` work in the callback
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

//Mehtoden in Klassen ohne "Function"
handleChange(event){
this.setState({value: event.target.value});
}

handleSubmit(event){
alert('Nutzername wurde eingegeben: ' + this.state.value);
//Verhindert neu laden der Seite
event.preventDefault();
}

render(){
return(
<div>
<form onSubmit={this.handleSubmit}>
<input id="username" value={this.state.value} onChange={this.handleChange}></input>
<input type="submit" value="Absenden"></input>
</form>
</div>
);
}
}

export default Inputfeld;

