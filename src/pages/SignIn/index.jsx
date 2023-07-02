import { useState } from "react"
import { Link } from 'react-router-dom'
import { Heading, VStack } from "@chakra-ui/layout"
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Box,
} from '@chakra-ui/react'

export const SignIn = () => {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    
    const data = [
        {
            name: name,
            password: password
        }
    ]

    const handleData = () => {
        console.log(data)
    }

    return(
        <VStack h='100vh' alignItems='center' justifyContent='center' m={{base: '5', lg: '10', xl: '10'}}>
            <Heading mb={{xl: '3', lg: '3'}}>Sign In</Heading>
            <FormControl isRequired borderRadius='10' bg='blue.300' p='5' w={{base: '300px', md: 'sm', lg: 'xs', xl:'sm'}}>
                <FormLabel mt='3'>Name</FormLabel>
                <Input value={name} onChange={(e) => setName(e.target.value)} variant='filled' placeholder='Name' />

                <FormLabel mt='3'>Password</FormLabel>
                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} mb='3'variant='filled' placeholder='Password' />

                <Button onClick={handleData}  _hover={{ bg: '#ebedf0', color: 'black' }} colorScheme='white' bg='black' w={{base:'260px', md:'344px', lg:'280px'}} mt='3' type='submit'>Register</Button>

                <Box display='flex' gap='2' mt='3' justifyContent='space-between'>
                    <Text fontSize={{base: 'sm', xl: 'md'}} fontWeight='medium'>Ainda não possui conta?</Text> 
                   <Text fontWeight='medium'><Link to='/signup' fontSize={{base: 'sm', xl: 'md'}} >Registrar-se</Link></Text>
                </Box>
            </FormControl>
        </VStack>
    )
}