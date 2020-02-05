import React from 'react'

import Container from './Container'
import Layout from './Layout'

import { units } from 'data/units'

const Counter = () => {
  return (
    <Container>
      <h3>Bekräftade fall</h3> <h1>{units[0].confirmed}</h1>
      <h3>Misstänkta fall</h3> <h1>{units[1].suspect}</h1>
      <p></p>
    </Container>
  )
}

export default Counter
