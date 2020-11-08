import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'burr, it is chilldy',
        iconName: 'snowflake'
    }
}

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter'; //js ternary expression
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, iconName } = seasonConfig[season] // get object with name season from object of objects, seasonConfig
    

    return ( // we use curly braces any time referencing javascript variable, but we can also put any javascript expression in here!
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} /> 
        {/* the line above takes the value of the object 'iconName' and places it into the string 'icon' */}
        {/* basically we need to do this because we cannot pass a javascript variable into className, it must explicitly be a string. the technique we are using above is called 'template literals' */}
        {/* the default behavior of the template literal is to take the expression and concatenate it with the string */}
        <h1>{season === 'winter' ? 'Burr, it is chilly' : 'Let\'s hit the beach'} 
        </h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>
    );
};

export default SeasonDisplay;