import React from "react";


//Loader component using the SemanticUI style kit
const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
      {props.message}
      </div>
    </div>
  )
}

//Default props so if message isn't specified there will be a fallback message
Loader.defaultProps = {
  message: 'Loading...'
}


export default Loader;
