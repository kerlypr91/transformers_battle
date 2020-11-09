import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import OpeningTheme from '../../Images/opening_theme.mp3'

import { Icon } from 'semantic-ui-react'
import Header from './_Components/_Header'
import Navbar from './_Components/_Navbar'
import Infobar from './_Components/_Infobar'
import Footer from './_Components/_Footer'
import { Routes } from '../../Utils'

import './index.scss'

const useAudio = url => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  },
    [playing]
  )

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    }
  }, [])

  return [playing, toggle]
}

export default function Layout () {
  const [playing, toggle] = useAudio(OpeningTheme)

  /** Render */
  return (
    <React.Fragment>
      <section className="audio-container">
        <button className="audio-container__button" onClick={toggle}>
          <Icon name={playing ? "volume up" : "volume off"} size='large' />
          {playing ? "Pause music" : "Play music"}
        </button>
      </section>
      <main className="layout">
        <section className="layout__left-side">
          <Navbar />
          <Header />
          <section className="layout__left-side__content">
            <Switch>
              {Routes.map((route, index) => {
                const { exact, path, component: ComponentName } = route

                return (
                  <Route key={index} exact={!!exact} path={path}>
                    <ComponentName />
                  </Route>
                )
              })}
            </Switch>
          </section>
          <Footer />
        </section>
        <section className="layout__right-side">
          <Infobar />
        </section>
      </main>
    </React.Fragment>

  )
}
