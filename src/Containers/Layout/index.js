import React from 'react'
import { Switch, Route } from 'react-router-dom'

import OpeningTheme from '../../Images/opening_theme.mp3'

import Header from './_Components/_Header'
import Navbar from './_Components/_Navbar'
import Infobar from './_Components/_Infobar'
import Footer from './_Components/_Footer'
import { Routes } from '../../Utils'

import './index.scss'


export default function Layout () {
  /** Render */
  return (
    <main className="layout">
      {/* <audio controls autoPlay>
        <source src={OpeningTheme} type="audio/mpeg" />
            Your browser does not support the audio element
      </audio> */}
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
  )
}
