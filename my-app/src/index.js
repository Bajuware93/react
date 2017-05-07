import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component{
constructor(){
super();
this.state = {
value: 'Anfangsstatus'
};
}
render(){
return(
<div>
<button className="component" onClick={() =>
this.setState({value: 'geklickt'})}>{this.state.value}</button>
</div>
);
}
}

//In der Klasse wird die Ausgabe zusammengestellt.(wie wird ausgegeben) 
//Die Property Werte werden in der ReactDOM.render Funktion übergeben (was wird ausgegben)
class Props extends React.Component{
render(){
return(
<div>{this.props.name} isst gerne: {this.props.essen}</div>
);
}
}


//Ohne this.props.children wird "Text im Children" nicht ausgegeben
class Children extends React.Component{
render(){
return(
<div>
<p>{this.props.childname}</p>
<p>{this.props.children}</p>
</div>
);
}
}

class Inputfeld extends React.Component{

constructor(props){
super(props);
this.state = {value: ''};
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


ReactDOM.render(
<div>
<Component />
<Props name="Timo" essen="Döner" />
<Props name="Lilly" essen="Pizza" />
<Children childname="Children">Text im Children</Children> 
<Inputfeld />
</div>,
document.getElementById('root')
);



/*class MainComponent extends React.Component{
/* Die Funktion gibt Component aus und fügt die props value hinzu
Auf value kann mit {this.props.value} in Component zugegriffen
werden

render_button(){
return <Component value='Value aus Main' />
}

render(){
return (
this.render_button()
)

}

} */


