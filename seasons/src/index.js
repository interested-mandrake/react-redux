import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
   constructor(props) { // in react, constructor is called with props object
        super(props); // construct the parent

        this.state = { latitude: null, errorMessage: ''}; // set state equal to an object

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude });
            }, //success callback
            (err) => {
                this.setState({ errorMessage: err.message })
            } //error callback
        ); // callbacks run in the future, in this case
           // after exiting the constructor method
    } 
   
    render(){     
        if(this.state.errorMessage && !this.state.latitude){ // if state has an error message and does not have a latitude property
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.latitude){ 
            return <div>Latitude: {this.state.latitude}</div>
        }
        
        return <div>Loading...</div>
    }
} 

ReactDOM.render(
    <App />, document.querySelector('#root')
);