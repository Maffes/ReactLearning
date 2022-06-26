import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import './style.css'

/*
Component Lifecycle
1. Constructor - Runs all pre-processors/initialization and data loading (e.g creating the state or loading data from API)
2. Render - Displays the JSX to the view
- Content will now be visable in the browser
3. componentDidMount - Performs data loading (Similar to a contructor)
4. componentDidUpdate - updates the view with new data (Similar to Render)
5. componentDidUnmount - used when a component is no longer required and needs cleaning up.

**Best Practice - Perform data loadings in componentDidMount when can instead of contructor for easier to read code**
*/

//need extends React.Component to make a class-based component
class App extends React.Component {
  //works the same as using constructor with this.state = {}. Promotes better code legibility.
  state = { lat: null, errorMessage: ''}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

 //return loader as it should not be called again when updating
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return (
      <Loader message="Please accept location request"/>
    );
  }


 //Avoiding conditionals in render (e.g keeping a border regardless of what is being rendered)
  render() {
    return (
        <div className="border">
          {this.renderContent()}
        </div>
    )
  }
}



ReactDOM.render(
  <App />,
  document.querySelector('#root')
)