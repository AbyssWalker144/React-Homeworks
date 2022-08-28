import React, { Component } from 'react'
import HidingComponent from './HidingComponent'

export default class Showhide2 extends Component {
    state={
        hide: "true",
    }
  render() {
    return (
      <div>
        {!this.state.hide && <HidingComponent/>}
        <button onClick={() => this.setState({hide: false})}>Show component</button>
        <button onClick={() => this.setState({hide: true})}>Hide component</button>
      </div>
    )
  }
}
