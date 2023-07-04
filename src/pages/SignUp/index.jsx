import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Heading, VStack } from "@chakra-ui/layout"
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Box,
    useToast,
} from '@chakra-ui/react'
import { ApiContext } from "../../providers/api"

export const SignUp = () => {
    const { createsClients } = useContext(ApiContext)
    const [username,setUsername] = useState('')
    const [avatar,setAvatar] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const toast = useToast()
    const history = useHistory()

    const data = {
        "user" : {
            username: username,
            avatar: avatar,
            email: email,
            password: password
        }
    }
        
    const handleData = async () => {
        const response = await createsClients(data)
        localStorage.setItem('userId', response.data.user.id)
        
        if(response !== 'AxiosError'){
            toast({title:'Account created', status:'success', duration: 4000,colorScheme:'blue'})
            history.push('/signup')
        }
    }

    return(
        <VStack h='80vh' alignItems='center' justifyContent='center' m={{base: '5', lg: '10', xl: '10'}}>
            <Heading mb={{xl: '3', lg: '3'}}>Sign Up</Heading>
            <FormControl isRequired borderRadius='10' bg='blue.300' p='5' w={{base: '300px', md: 'sm', lg: 'xs', xl:'sm'}}>
                <FormLabel mt='3'>Name</FormLabel>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} variant='filled' placeholder='Name' />

                <FormLabel mt='3'>Avatar</FormLabel>
                <Input value={avatar} onChange={(e) => setAvatar(e.target.value)} variant='filled' placeholder='Avatar' />

                <FormLabel mt='3'>Email</FormLabel>
                <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} variant='filled' placeholder='Email' />

                <FormLabel mt='3'>Password</FormLabel>
                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} mb='3'variant='filled' placeholder='Password' />

                <Button onClick={handleData}  _hover={{ bg: '#ebedf0', color: 'black' }} colorScheme='white' bg='black' w={{base:'260px', md:'344px', lg:'280px', xl: '340px'}} mt='3' type='submit'>Register</Button>

                <Box display='flex' gap='2' mt='3' justifyContent='space-between'>
                    <Text fontSize='md' fontWeight='medium'>already has an account?</Text> 
                    <Text fontSize='md' fontWeight='medium'><Link to='/signin' >Acess</Link></Text>
                </Box>
            </FormControl>
        </VStack>
    )
}