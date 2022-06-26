import React from "react";
import ReactDOM from "react-dom";

/*
  This is a functional component
-----------------------------------------------------------
  const App = () => {
  //Can use getCurrentPosition or watchCurrentPosition
  window.navigator.geolocation.getCurrentPosition(
    //gets users position
    (position) => console.log(position),
    //Error Message
    (err) => console.log(err)
  );
  return <div>Latitude: </div>;
}
*/


/*
  This is a Class-Based component (Allows the use of state)
  - use constructer to create the state and  initialize
  - define render() - reders the view
  - State can only be updated through setState
  - Because constructor is ran before the render() function, will update when lat is set
  */

class App extends React.Component {
  constructor(props) {
    //super is reference to parent function
    super(props);
    //initializes state and only direct assignment
    this.state = { lat: null, errorMessage: ''}

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //Updates state !!IMPORTANT THIS IS HOW YOU SET STATE. AVOID DIRECT ASSIGNMENT!!
        this.setState({ lat: position.coords.latitude })
      },
      //saves the error message to state
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    );
  }


  //Uses conditional rendering to load the message based of state properties
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }
    return (
      <div>Loading</div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.querySelector('#root')
)