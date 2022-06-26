/*
Import React and ReactDOM libraries
1. "import" states this it is an import
2. reactDOM is the variable name associated with the import
3. from states the location will be specified next
4. "react-dom" is dependency or path to file being imported
*/
import ReactDOM from "react-dom";
import React from "react";



function getVariableExample () {
  //must reference with {getVariableExample()}
  return 'functionVariableString'
}

/*Syntax refs
1. className for HTML class refs
2.style wrapped in {uses camel case instead of -}
3. const variable is good some simple stuff
4. If const is too simple use function
5. when referencing for put in html before e.g. htmlFor="" to avoid for loops on old browsers
*/
//Create a React component
const App = () => {
  const variableExample = 'variableString'
  //must reference with {variableObjectExample.text} + this can be used for the style=""
  const variableObjectExample = { text: 'Click me'}
  return (
    <div>
      <label className="lable" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'red'}}>
        {variableObjectExample.text}
      </button>
    </div>
  );
};





//Take the React component and show it on the screen
ReactDOM.render(<App />,document.querySelector('#root'));






