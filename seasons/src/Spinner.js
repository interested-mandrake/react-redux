import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div class="ui big text loader">{props.message}</div>
        </div>
    );

     Spinner.defaultProps = { //if we make instance of spinner component and forget to pass in message props, message prop defaults to this value
        message: 'Loading...'
    };
};

export default Spinner;