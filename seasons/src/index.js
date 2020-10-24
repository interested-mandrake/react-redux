import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component{
   
    state = {latitude: null, errorMessage: ''}; // alternate way to initialize state
   
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }), 
            (err) => this.setState({ errorMessage: err.message })
        ); 
    }

    componentDidUpdate(){
        console.log("The component was updated - it re-rendered");
    }

    render(){     
        if(this.state.errorMessage && !this.state.latitude){ // if state has an error message and does not have a latitude property
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.latitude){ 
            return <SeasonDisplay latitude={this.state.latitude}/>
        }
        
        return <div>Loading...</div>
    }
} 

ReactDOM.render(
    <App />, document.querySelector('#root')
);