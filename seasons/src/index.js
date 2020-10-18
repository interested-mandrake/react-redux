import React from 'react';
import ReactDOM from 'react-dom';

// the issue with the functional component here was that it takes
// some time to get the value back after calling the geolocation
// service. the jsx will get loaded before the getCurrentPosition method
// returns a value. with a functional component, we had no good way
// of re-rendering or telling the App component to pause its rendering
// process
class App extends React.Component{
   constructor(props) { // in react, constructor is called with props object
        super(props); // construct the parent

        this.state = { latitude: null }; // set state equal to an object

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude });
            }, //success callback
            (err) => console.log(err) //error callback
        ); // callbacks run in the future, in this case
           // after exiting the constructor
    } 
   
    render(){     
        return <div>Latitude: {this.state.latitude}</div>;
    }
} // in this app as it is, render method gets called twice, once when it
// gets constructed, and once when state is null, and again
// when this.setState gets called

ReactDOM.render(
    <App />, document.querySelector('#root')
);