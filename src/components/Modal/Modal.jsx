import React, { Component } from 'react'

import Portal from './Portal'

import './Modal.scss'

export default class Modal extends Component {
  constructor (props) {
    super(props)
    this.modelElement = null
  }

  componentDidMount () {
    document.body.classList.add('modal-open')
    this.focusIfNeeded()
  }

  componentWillUnmount () {
    document.body.classList.remove('modal-open')
  }

  onOverlayClick (event) {
    this.requestToClose(event)
  }

  handleKeyDown (event) {
    if (event.key === 'Escape') {
      event.preventDefault()
      this.requestToClose(event)
    }
  }

  focusIfNeeded () {
    if (
      this.modelElement &&
      !this.modelElement.contains(document.activeElement)
    ) {
      this.modelElement.focus()
    }
  }

  requestToClose (
    event
  ) {
    if (!this.props.easyClose) return
    if (typeof this.props.onRequestClose === 'function') {
      this.props.onRequestClose(event)
    }
  }

  createModalContent () {
    return (
      <Portal
        portalClassName={'modal-portal'}
        holderClassName={this.props.holderClassName}
      >
        <div
          className={'overlay'}
          onClick={this.onOverlayClick.bind(this)}
        />
        <div
          className={`modal-container ${this.props.contentClass}`}
          style={this.props.contentStyle}
          ref={ele => {
            this.modelElement = ele
          }}
          tabIndex={-1}
          onKeyDown={this.handleKeyDown.bind(this)}
        >
          <span className="closeIcon" onClick={this.onOverlayClick.bind(this)}>✕</span>
          <div
            className={`modal-content ${this.props.childrenContentClass}`}
          >
            {this.props.children}
          </div>
        </div>
      </Portal>
    )
  }

  render () {
    return <div>{this.props.open ? this.createModalContent() : null}</div>
  }
}
