import './SeasonDisplay.css'

import React from "react";


//Config function which creats an object containing the season messages and iconNames
const seasonConfig = {
  summer: {
    text: 'It is summer',
    iconName: 'sun'
  },
  winter:{
    text: 'It is winter',
    iconName: 'snowflake'
  }
};



//Helper function to distinguish if it is winter or summer based on location
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    //Ternary expression
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

//React component
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season]
  //the ${} is ES6 string interpolation and `` is template string
  return <div className={`season-display ${season}`}>< i className={`${iconName} icon massive icon-left`}/><h1>{text}</h1>< i className={`${iconName} icon massive icon-right`}/></div>}
export default SeasonDisplay;