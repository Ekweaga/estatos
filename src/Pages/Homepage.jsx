import React, {useEffect,useState} from'react'
import { Button, ButtonGroup,Flex, Box,Text,Avatar} from '@chakra-ui/react'
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import millify from 'millify'
import './homepage.css';
import axios from 'axios'
import {baseurl} from '../utilis/fetchapis'
import {Link} from 'react-router-dom'

function Homepage() {
  const [rent, setrent] = useState([]);
 
  
const fetchrentapi = async() =>{
  await axios.get((`${baseurl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=21`),{
     headers: {
         'X-RapidAPI-Key': '9fc598df98mshacdc26f399e849bp15c0d4jsn1e89370f0781',
         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
       }
 }).then((data)=>{
  console.log(data.data.hits);
  setrent(data.data?.hits)
});



}
 
useEffect(()=>{
//const propertyforsale =  fetchapi(`${baseurl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=10`)
//const propertyforrent =  fetchapi(`${baseurl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=10`);

fetchrentapi();
}, [])
  return (
  <>  <div className='banner'>
      <h1>Search Your Next Dream Home</h1>
      <p>Find different houses, apartments to have a niece time</p><br/>

      <div> <ButtonGroup gap='4'>
      <Button colorScheme='whiteAlpha' variant='outline'><Link to="/sale">Buy A Home</Link></Button>
      <Button colorScheme='WhiteAlpha' variant='outline'><Link to="">Rent A Home</Link></Button>
    </ButtonGroup></div>
    </div>

    <div className='rent'>
      {rent.map((renthome)=>{
          return (
            <div>
            <Flex  p="5" w="420px"   paddingTop="0" flexDirection="column" >
                <Box >
                  <img src={renthome.coverPhoto.url} className="img"/>
                </Box>
                <Box w="full">
                    <Flex paddingTop="2" alignItems="center" justifyContent="space-between" width="250px">
                      <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">{renthome.isVerified && <GoVerified/>}</Box>
                        <Text fontWeight="bold" fontSize="lg">{millify(renthome.price)}/ {renthome.rentFrequency}</Text>
                      </Flex>
                      <Box>
                        <Avatar size="sm" src={renthome.agency.logo.url}/>
                      </Box>
                    </Flex>
                    <Flex alignItems="center" p="1" justifyContent="space-between" color="blue.400" w="250px">
                      {renthome.rooms} <FaBed/> | &nbsp;{renthome.baths} <FaBath/> | {millify(renthome.area)}sqft <BsGridFill/>
                    </Flex>
                    <Text fontSize="sm" fontweight="600" textTransform="uppercase">
                      {renthome?.title.substring(0,20)}...
                    </Text>

                </Box>
            </Flex>
            </div>
          )
      })}
    </div></>
  )
}

export default Homepage
