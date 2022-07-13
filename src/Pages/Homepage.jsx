import React from 'react'
import { Button, ButtonGroup,Flex } from '@chakra-ui/react'
import './homepage.css';

function Homepage() {
  return (
    <div className='banner'>
      <h1>Search Your Next Dream Home</h1>
      <p>Find different houses, apartments to have a niece time</p><br/>

      <div> <ButtonGroup gap='4'>
      <Button colorScheme='whiteAlpha'>Buy A Home</Button>
      <Button colorScheme='blackAlpha'>Rent A Home</Button>
    </ButtonGroup></div>
    </div>
  )
}

export default Homepage
