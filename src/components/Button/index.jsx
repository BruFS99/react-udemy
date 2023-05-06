import React, { Component } from 'react'
import '../Button/styles.css';

export class Button extends Component {
  render() {
    const {text, onClick, disabled} = this.props
    return (
        <button disabled={disabled} className='button' onClick={onClick}>Load more posts</button>
    )
  }
}

export default Button