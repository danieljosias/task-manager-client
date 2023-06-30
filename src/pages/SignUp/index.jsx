import { Flex, Heading, VStack } from "@chakra-ui/layout"
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

    const handleData = () => {

    }

    return(
        <VStack m='5'>
            <Heading>Sign Up</Heading>
            <FormControl isRequired borderRadius='10' bg='blue.300' p='5' w={{base: '300px', md: 'sm', lg: 'sm'}}>
                <FormLabel mt='3'>Name</FormLabel>
                <Input variant='filled' placeholder='Name' />

                <FormLabel mt='3'>Avatar</FormLabel>
                <Input variant='filled' placeholder='Avatar' />

                <FormLabel mt='3'>Email</FormLabel>
                <Input variant='filled' placeholder='Email' />

                <FormLabel mt='3'>Password</FormLabel>
                <Input mb='3'variant='filled' placeholder='Password' />

                <Button  _hover={{ bg: '#ebedf0', color: 'black' }} colorScheme='white' bg='black' w={{base:'260px', md:'344px'}} mt='3' type='submit'>Register</Button>

                <Box display='flex' gap='2' mt='3' justifyContent='space-between'>
                    <Text fontSize='md' fontWeight='medium'>Já possui conta?</Text> 
                    <Link href='/signin' fontSize='md' fontWeight='medium'>Acessar</Link>
                </Box>
            </FormControl>
        </VStack>
    )
}