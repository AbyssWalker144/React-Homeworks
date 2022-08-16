import React, { Component } from 'react'
import img from './exampleImg.jpg';
import styles from './ImgComponent.css';

class ImgComponent extends Component {
  render() {
    return (
      <>
        <img src={img}></img>;
      </>
    )
  }
}

export default ImgComponent;