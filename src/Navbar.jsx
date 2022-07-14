import React from 'react'
import {Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer,Button} from '@chakra-ui/react'
import {BsSearch} from 'react-icons/bs'
import {FcMenu, FcHome, FcAbout} from 'react-icons/fc'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link to="">ESTATOS</Link>
        </Box>
        <Spacer/>
        <Box>
                    <Menu>
                        <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.100"/>
                        <MenuList>
                           <Link to=""><MenuItem color="black"><FcHome/> Home</MenuItem></Link> 
                           <Link to=""><MenuItem color="black"><BsSearch/> Search</MenuItem></Link> 
                           <Link to=""><MenuItem color="black"><FcHome/> Home</MenuItem></Link> 
                           <Link to="/signin"> <Button colorScheme="blue">Log Out</Button></Link>
                        </MenuList>
                    </Menu>
        </Box>
    </Flex>
  )
}

export default Navbar
