import React from 'react'
import { Icon } from 'semantic-ui-react'

import './_infobar.scss'

export default function InfoBar () {
  return (
    <section className="infobar">
      <div className="infobar__avatar-container">
        <div className="infobar__avatar-container__avatar" />
      </div>
      <div className="infobar__item">
        <div className="infobar__item--facebook">
          <Icon name="facebook f" size='large' inverted />
        </div>
      </div>
      <div className="infobar__item">
        <div className="infobar__item--twitter">
          <Icon name="twitter" size='large' inverted />
        </div>
      </div>
      <div className="infobar__item">
        <div className="infobar__item--twitch">
          <Icon name="twitch" size='large' inverted />
        </div>
      </div>
    </section>
  )
}
