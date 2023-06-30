import { useState } from "react"
import { Heading, VStack } from "@chakra-ui/layout"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Link,
    Text,
    Box,
} from '@chakra-ui/react'

export const SignUp = () => {
    const [name,setName] = useState('')
    const [avatar,setAvatar] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const data = [
        {
            name: name,
            avatar: avatar,
            email: email,
            password: password
        }
    ]

    const handleData = () => {
        console.log(data)
    }

    return(
        <VStack m={{base: '5', lg: '10', xl: '10'}}>
            <Heading mb={{xl: '3', lg: '3'}}>Sign Up</Heading>
            <FormControl isRequired borderRadius='10' bg='blue.300' p='5' w={{base: '300px', md: 'sm', lg: 'sm', xl:'sm'}}>
                <FormLabel mt='3'>Name</FormLabel>
                <Input value={name} onChange={(e) => setName(e.target.value)} variant='filled' placeholder='Name' />

                <FormLabel mt='3'>Avatar</FormLabel>
                <Input value={avatar} onChange={(e) => setAvatar(e.target.value)} variant='filled' placeholder='Avatar' />

                <FormLabel mt='3'>Email</FormLabel>
                <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} variant='filled' placeholder='Email' />

                <FormLabel mt='3'>Password</FormLabel>
                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} mb='3'variant='filled' placeholder='Password' />

                <Button onClick={handleData}  _hover={{ bg: '#ebedf0', color: 'black' }} colorScheme='white' bg='black' w={{base:'260px', md:'344px'}} mt='3' type='submit'>Register</Button>

                <Box display='flex' gap='2' mt='3' justifyContent='space-between'>
                    <Text fontSize='md' fontWeight='medium'>Já possui conta?</Text> 
                    <Link href='/signin' fontSize='md' fontWeight='medium'>Acessar</Link>
                </Box>
            </FormControl>
        </VStack>
    )
}