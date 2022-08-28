import React, { Component } from 'react'

export default class HidingComponent extends Component {

    componentDidMount(){
        alert("You can see the component!")
    }

    componentWillUnmount(){
        alert("You can't see the component!")
    }
  render() {
    return (
      <p>Can you see me?</p>
    )
  }
}
