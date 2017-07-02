import React from 'react';
import ReactDOM from 'react-dom';
import ExterneComponente from './comp/import_custom';
import Inputfeld from './comp/input_feld';
import Inputfeld2 from './comp/input_feld2';
import Example from './comp/modal';


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


ReactDOM.render(
<div>
<Component />
<Props name="Timo" essen="Döner" />
<Props name="Lilly" essen="Pizza" />
<Children childname="Children">Text im Children</Children> 
<Inputfeld />
<ExterneComponente />
<Inputfeld2 />
<Example />
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


