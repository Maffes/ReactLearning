import React from "react";
import ReactDOM from "react-dom";

/*

Controlled Elements:
When the input field is changes it is then updated in that state and placed back into the DOM. This is a controlled element which relies on react instead of dom

------------
onInputChange can be named anything but property names much have correct naming

onInputChange() - Event handeler which listens for when an input field has been modified (Passed in through onChange={this.inInputChange} reference and not onChange={this.inInputChange()}) *community convention*
  onInputChange(event) {
  console.log(event.target.value)
  }
--------------------------

Property Name
- onChange
- onClick
- onSubmit
Otherwise arrow function can be used when appropriate


*/

class SearchBar extends React.Component {
state = {term: ''}
 


//stops the browser from refreshing when form submitted through onSubmit={}
//must use arrow function to bind this.
//must use this in this.props.onSubmit() to send to parent
onFormSubmit = (event) => {
  event.preventDefault();
  this.props.onSubmit(this.state.term)
}



  render() {
    return (
      <div className=" ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              //overrides whats already in the input
              value={this.state.term}
              //when change is made to input updates the state
              onChange={(e) => this.setState({term: e.target.value})}/>
          </div>
        </form>
      </div>
    )
  }
}















export default SearchBar;