import React from 'react';
import ReactDOM from 'react-dom';




//COMPNENTS to Import
import Header from './Components/header';



const App = () =>{

return <h1> <Header/> </h1>

}

ReactDOM.render(<App/>,document.querySelector('#root'));