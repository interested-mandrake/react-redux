// import React and ReactDOM libraries
import React from 'react'; // by convention only, we assign the variable to the name of the place we import from. technically, we could call this variable anything
import ReactDOM from 'react-dom';


// create a react component
/*const App = function(){ // this is a function-based component. it can also be written as below:
    return <div>Hi there!</div>
}*/
const App = () => {  // this uses an ES2015 arrow function
    return <div>Hi there!</div>
}

// take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);