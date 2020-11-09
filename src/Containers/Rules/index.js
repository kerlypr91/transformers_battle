import React from 'react'

import RulesBg from '../../Images/rules_bg.jpg'

import './index.scss'

export default function Rules () {
  return (
    <section className="rules">
      <div className="rules__content">
        <h3>The basic rules of the battle are:</h3>
        <dl>
          <dt>
            &#8227; The teams should be sorted by rank and faced off one on one against each other in order to
            determine a victor, the loser is eliminated
          </dt>
          <dt>
            &#8227; A battle between opponents uses the following rules:
          </dt>
          <dd>
            &#9702; If any fighter is down 4 or more points of courage and 3 or more points of strength
            compared to their opponent, the opponent automatically wins the face-off regardless of
            overall rating (opponent has run away)
          </dd>
          <dd>
            &#9702; Otherwise, if one of the fighters is 3 or more points of skill above their opponent, they win
            the fight regardless of the overall rating
          </dd>
          <dd>
            &#9702; The winner is the Transformer with the highest overall rating
          </dd>
          <dt>&#8227; In the event of a tie, both Transformers are considered destroyed</dt>
          <dt>
            &#8227; Any Transformers who don’t have a fight are skipped (i.e. if it’s a team of 2 vs. a team of 1, there’s
            only going to be one battle)
          </dt>
          <dt>&#8227; The team who eliminated the largest number of the opposing team is the winner</dt>
        </dl>
      </div>
      <div className="rules__img">
        <img src={RulesBg} alt="rules" />
      </div>
    </section>
  )
}
