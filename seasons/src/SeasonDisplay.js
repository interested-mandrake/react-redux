import React from 'react';

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter'; //js ternary expression
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    const icon2 = 'winter';
    

    return ( // we use curly braces any time referencing javascript variable, but we can also put any javascript expression in here!
    <div>
        <i className={`${icon} icon`} /> 
        {/* the line above takes the value of the variable 'icon' and places it into the string 'icon' */}
        {/* basically we need to do this because we cannot pass a javascript variable into className, it must explicitly be a string. the technique we are using above is called 'template literals' */}
        <h1>{season === 'winter' ? 'Burr, it is chilly' : 'Let\'s hit the beach'} 
        </h1>
        <i className={`${icon} icon`} />
    </div>
    );
};

export default SeasonDisplay;