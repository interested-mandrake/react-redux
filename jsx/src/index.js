// import React and ReactDOM libraries
import React from 'react'; // by convention only, we assign the variable to the name of the place we import from. technically, we could call this variable anything
import ReactDOM from 'react-dom';


// create a react component
/*const App = function(){ // this is a function-based component. it can also be written as below:
    return <div>Hi there!</div>
}*/
const App = () => {  // this uses an ES2015 arrow function
    const buttonText = {text: 'click me'}; // create a javascript object with a text property
    //const style = {backgroundColor: 'blue', color: 'white'}; // it would be valid to to use this object in jsx tag below like <button style={style}>

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>

        </div>  
    );
  
}

// take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);