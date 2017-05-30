import { Component } from 'react'

export default class AutoGrowTextarea extends Component {
  componentDidMount () {
    this.recomputeSize()
  }

  componentDidUpdate () {
    this.recomputeSize()
  }

  handleChange = (evt) => {
    this.recomputeSize()
    if (this.props.onChange) this.props.onChange(evt)
  }

  recomputeSize = () => {
    const node = this.refs.textarea
    node.style.minHeight = 'auto'
    node.style.minHeight = `${node.scrollHeight}px`
  }

  render () {
    return (
      <textarea
        rows={1}
        {...this.props}
        onChange={this.handleChange}
        ref='textarea' />
    )
  }
}
