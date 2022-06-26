import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0}
    this.imageRef = React.createRef();
  }

  //event listener for image load with this.setSpans classback
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  //receives the client height from the componentDidMount event listener then sets height to image
  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10);
    this.setState({spans: spans});
  }



  render() {
    const {description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef} 
          alt={description} 
          src={urls.regular}
          />
      </div>
    )
  }
}

export default ImageCard;