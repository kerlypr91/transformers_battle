import React, { Component } from 'react'

import './index.scss'

export default class Scale extends Component {
  /** Handle Event Methods */

  handleScaleChange = (key, value) => () => {
    const { onScaleChange, value: propValue } = this.props
    const newValue = propValue === value ? '' : value

    this[`scale_option_${key}_${value}`].classList.add("scale__options__option--blink")

    setTimeout(() => {
      onScaleChange(key, newValue)
    }, 300)
  }

  render () {
    const { options, id, value } = this.props
    const componentId = `scale_component_${id}`

    return (
      <div
        className="scale"
        key={componentId}
        id={componentId}
      >
        <div
          className="scale__options"
        >
          {options.map((item) => {
            const activeClass = value === item ? "scale__options__option--selected" : ''
            const optionId = `scale_option_${id}_${item}`

            return (
              <div
                className={`scale__options__option ${activeClass}`}
                id={optionId}
                key={optionId}
                ref={(element) => {
                  this[optionId] = element
                }}
                onClick={this.handleScaleChange(id, item)}
              >
                {item}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
