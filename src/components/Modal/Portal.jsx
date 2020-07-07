import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends Component {
  constructor (props) {
    super(props)
    this.holder = document.createElement('div')
  }

  componentDidMount () {
    this.holder.className = this.props.holderClassName || ''
    document.body.appendChild(this.holder)
  }

  componentWillUnmount () {
    if (this.holder && this.holder.parentNode) {
      this.holder.parentNode.removeChild(this.holder)
    }
  }

  render () {
    return ReactDOM.createPortal(
      <div
        className={this.props.portalClassName}
        style={this.props.portalStyle}
      >
        {this.props.children}
      </div>,
      this.holder
    )
  }
}

Portal.defaultProps = {
  portalClassName: '',
  portalStyle: {},
  holderClassName: ''
}
