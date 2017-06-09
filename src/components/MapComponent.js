import React from 'react';
import Dimensions from 'react-dimensions'

class MapComponent extends React.Component {
  render() {
    console.log(this.props.containerWidth, this.props.containerHeight);
    return (
      <iframe
        className=''
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.6300040674732!2d-122.35798588464156!3d47.69160507919041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901421cd5abb57%3A0xb2abc161dde166!2sUrban+Light+Studios!5e0!3m2!1sen!2sus!4v1496980528007"
        frameBorder="0"
        style={{
          position: '',
          height: '400px',
          width: '100%'
        }}
        allowFullScreen
      />
    );
  }
}

export default MapComponent
