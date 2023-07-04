import { useContext, useState } from "react"
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
import { ApiContext } from '../../providers/api'

export const SignIn = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const { loginClients, listLists, setLists } = useContext(ApiContext)
    const toast = useToast()
    const history = useHistory()

    const data = {
            username: username,
            password: password
    }

    const handleData = async () => {
       const response = await loginClients(data)
       localStorage.setItem('token', response.data.token)

       if(response.error != 'AxiosError'){
        toast({title:'Logged', status:'success', duration: 4000, colorScheme:'blue'})
        history.push('/dashboard')
        const response = await listLists()
        setLists([response])
       }
    }

    return(
        <VStack h='80vh' alignItems='center' justifyContent='center' m={{base: '5', lg: '10', xl: '10'}}>
            <Heading mb={{xl: '3', lg: '3'}}>Sign In</Heading>
            <FormControl isRequired borderRadius='10' bg='blue.300' p='5' w={{base: '300px', md: 'sm', lg: 'xs', xl:'sm'}}>
                <FormLabel mt='3'>Username</FormLabel>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} variant='filled' placeholder='username' />

                <FormLabel mt='3'>Password</FormLabel>
                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} mb='3'variant='filled' placeholder='Password' />

                <Button onClick={handleData}  _hover={{ bg: '#ebedf0', color: 'black' }} colorScheme='white' bg='black' w={{base:'260px', md:'344px', lg:'280px', xl: '340px'}} mt='3' type='submit'>Enter</Button>

                <Box display='flex' gap='2' mt='3' justifyContent='space-between'>
                    <Text fontSize={{base: 'sm', xl: 'md'}} fontWeight='medium'>Don't have an account?</Text> 
                   <Text fontSize={{base: 'sm', xl: 'md'}} fontWeight='medium'><Link to='/signup' >Register</Link></Text>
                </Box>
            </FormControl>
        </VStack>
    )
}