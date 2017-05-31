import { Component } from 'react'

export default class AutoGrowTextarea extends Component {
  componentDidMount () {
    this.recomputeSize()
    this.recomputePlaceholder()
  }

  componentDidUpdate () {
    this.recomputeSize()
    this.recomputePlaceholder()
  }

  handleChange = (evt) => {
    this.recomputeSize()
    this.recomputePlaceholder()
    if (this.props.onChange) this.props.onChange(evt)
  }

  handleFocus = (evt) => {
    this.recomputePlaceholder()
    if (this.props.onFocus) this.props.onFocus(evt)
  }

  handleBlur = (evt) => {
    this.recomputePlaceholder()
    if (this.props.onBlur) this.props.onBlur(evt)
  }

  recomputeSize = () => {
    const node = this.refs.node
    node.style.minHeight = 'auto'
    node.style.minHeight = `${node.scrollHeight}px`
  }

  recomputePlaceholder = () => {
    const { placeholder } = this.props
    const { node } = this.refs

    if (!placeholder || !node) return

    node.placeholder = node === document.activeElement ? '' : placeholder
  }

  render () {
    return (
      <textarea
        rows={1}
        {...this.props}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        ref='node' />
    )
  }
}
