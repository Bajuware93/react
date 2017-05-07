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

class Props extends React.Component{
render(){
return(
<div>{this.props.name} isst gerne: {this.props.essen}</div>
);
}
}

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

ReactDOM.render(
<div>
<Component />
<Props name="Timo" essen="Döner" />
<Props name="Lilly" essen="Pizza" />
</div>,
document.getElementById('root')
);



