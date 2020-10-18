import React from 'react';
import ReactDOM from 'react-dom';

// the issue with the functional component here was that it takes
// some time to get the value back after calling the geolocation
// service. the jsx will get loaded before the getCurrentPosition method
// returns a value. with a functional component, we had no good way
// of re-rendering or telling the App component to pause its rendering
// process
class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position), //success fallback
            (err) => console.log(err) //error falback
        )
        
        return <div>Latitude: </div>;
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);