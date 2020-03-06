import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Bubble from 'components/Bubble'
import Container from 'components/Container'

const Counter = ({ title, number, view, type, provinceState }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTimeZone
      }
    }
  `)

  const getViewTitle = () => {
    if (view === 'sweden') {
      return 'SVERIGE'
    } else {
      return 'VÄRLDEN'
    }
  }

  const getUpdatedAt = () => {
    const updatedAt = data.site.buildTimeZone
    if (view === 'sweden') {
      return updatedAt
    } else {
      return updatedAt.substring(0, updatedAt.length - 6)
    }
  }

  return (
    <Container className="counterCard">
      <Container className="header">
        <Container className="bubble">
          <Bubble view={view} />
        </Container>
        <p>{getViewTitle(view)}</p>
      </Container>

      {type != 'details' ? (
        <Container className="confirmedNumberContainer">
          <Container className="line"></Container>
          {number > 1000 ? (
            <h2>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h2>
          ) : (
            <h1>{number}</h1>
          )}
        </Container>
      ) : (
        <Container className="confirmedNumberContainer">
          <Container className="line"></Container>
          {number > 1000 ? (
            <h2 className={view === 'world' ? 'hWorld' : 'hSweden'}>
              {number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            </h2>
          ) : (
            <h1 className={view === 'world' ? 'hWorld' : 'hSweden'}>
              {number}
            </h1>
          )}
        </Container>
      )}
      <Container className="confirmedText">
        <h3>Bekräftade fall</h3>
      </Container>
      <Container className="updatedText">
        <p>UPPDATERAT {getUpdatedAt()}</p>
      </Container>
    </Container>
  )
}

// {updatedAt.substring(0, updatedAt.length - 6)}

export default Counter
