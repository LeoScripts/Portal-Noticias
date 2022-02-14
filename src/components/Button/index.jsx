import { Component } from "react";

import './style.scss'

export class Button extends Component {

  render(){
  const {text, click, noClick} = this.props


    return (
      <div className="container-addMore">
        <button 
          className="addMore" 
          onClick={click}
          disabled={noClick}
        >
          {text}
        </button>
      </div>
    )
  }
}