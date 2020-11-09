import React, { useContext, useState, useRef, useEffect } from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'

import { AppContext } from '../../Context'
import Scale from '../../Common/Scale'
import { TransformerSpecs, TransformerTypesList, TypesOfTransformers } from '../../Utils'

import './index.scss'

const defaultSpecs = {
  strength: '',
  intelligence: '',
  speed: '',
  endurance: '',
  rank: '',
  courage: '',
  firepower: '',
  skill: ''
}

export default function FormSection () {
  /** Local State */
  const [name, setName] = useState('')
  const [type, setType] = useState(TypesOfTransformers.autobot)
  const [specs, setSpecs] = useState({ ...defaultSpecs })

  const nameInput = useRef(null)

  /** Context */
  const { transformers } = useContext(AppContext)
  const [transformersValue, setTransformers] = transformers

  /** Handlers  */

  const handleNameChange = (event) => {
    const { value } = event?.target || {}

    setName(value || '')
  }

  const handleTypeChange = (event, data) => {
    const { value } = data

    setType(value)
  }

  const handleScaleChange = (key, newValue) => {
    setSpecs({ ...specs, [key]: newValue })
  }

  const handleAddTransformer = () => {
    if (!name) {
      return
    }

    const newValue = [...transformersValue]

    newValue.push({
      name,
      type,
      specs
    })

    if (nameInput) {
      nameInput.current.focus()
    }

    setName('')
    setType(TypesOfTransformers.autobot)
    setSpecs({ ...defaultSpecs })
    setTransformers(newValue)
  }

  useEffect(() => {
    if (nameInput) {
      nameInput.current.focus()
    }
  }, [])

  /** Renders */

  return (
    <section className="home-container__add-form">
      <div className="home-container__add-form__background"></div>
      <div className="home-container__add-form__content">
        <h2 className="home-container__add-form__content__header">Add your transformer!</h2>
        <Form inverted className="home-container__add-form__content__form">
          <Form.Field className="home-container__add-form__content__form__field">
            <label className="home-container__add-form__content__form__field__label">Name</label>
            <input placeholder='Name' value={name} onChange={handleNameChange} ref={nameInput} />
          </Form.Field>
          <Form.Field className="home-container__add-form__content__form__field">
            <label className="home-container__add-form__content__form__field__label">Type</label>
            <Dropdown
              placeholder='Type of Transformer'
              fluid
              selection
              options={TransformerTypesList}
              value={type}
              onChange={handleTypeChange}
            />
          </Form.Field>
          {
            TransformerSpecs.map((spec) => {
              const { label, id, options } = spec

              return (
                <Form.Field key={`field_${id}`} className="home-container__add-form__content__form__field">
                  <label className="home-container__add-form__content__form__field__label">{label}</label>
                  <div className="home-container__add-form__content__form__field__input">
                    <Scale id={id} options={options} onScaleChange={handleScaleChange} value={specs[id]} />
                  </div>
                </Form.Field>
              )
            })
          }

        </Form>
        <div className="home-container__add-form__content__button-container">
          <Button type='submit' onClick={handleAddTransformer} className="home-container__add-form__content__button-container__button">Add Transformer</Button>
        </div>
      </div>
    </section>
  )
}