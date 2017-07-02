import React from 'react';
import ReactDOM from 'react-dom';

class ExterneComponente extends React.Component{

render(){

return(
<div>
<h1>Hallo ich bin eine importierte Custom Componente< /h1>
</div>
)
}


}
//Wird benötigt, um die Componente in anderer Componente importieren zu koennen
export default ExterneComponente;
