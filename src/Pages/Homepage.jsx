import React, {useEffect,useState} from'react'
import { Button, ButtonGroup,Flex } from '@chakra-ui/react'
import './homepage.css';
import axios from 'axios'
import {baseurl} from '../utilis/fetchapis'

function Homepage() {
  const [rent, setrent] = useState([]);
  const [sale, Setsale] = useState([]);
  const fetchsaleapi = async() =>{
     await axios.get((`${baseurl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=20`),{
        headers: {
            'X-RapidAPI-Key': '9fc598df98mshacdc26f399e849bp15c0d4jsn1e89370f0781',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    }).then((data)=>console.log(data.data.hits));
   
   
   
}
const fetchrentapi = async() =>{
  await axios.get((`${baseurl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=20`),{
     headers: {
         'X-RapidAPI-Key': '9fc598df98mshacdc26f399e849bp15c0d4jsn1e89370f0781',
         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
       }
 }).then((data)=>console.log(data.data.hits));



}
 
useEffect(()=>{
//const propertyforsale =  fetchapi(`${baseurl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=10`)
//const propertyforrent =  fetchapi(`${baseurl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=10`);
fetchsaleapi();
fetchrentapi();
}, [])
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
