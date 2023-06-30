import { Flex, Heading, Image, Button, Box } from '@chakra-ui/react'
import welcome from '../../assets/welcome.webp'
import { useHistory } from 'react-router-dom'

export const Welcome = () => {
    const history = useHistory()

    const handleNavigate = () => {
        history.push("/signup")
    }

    return(
        <Flex h='100vh' display={{base: 'flex'}} flexDirection={{base: 'column', xl: 'row'}} alignItems={{base: 'center'}} justifyContent={{base: 'center'}} textAlign={{base: 'center'}} gap='5'>
            <Box>
                <Image src={welcome} alt='welcome' w={{base: '320px', md: 'md', lg: 'lg', xl: 'md'}}/>
            </Box>
            <Box>
                <Heading as='h1' fontSize='4xl' w={{base: '320px', md: 'md', lg: 'lg', xl: 'xl'}}>Task Manager</Heading>
                <Button onClick={handleNavigate} mt='3' bg='blue.300' w={{base: '320px', md: 'md', lg: 'lg', xl: 'sm'}} >Lest's Go</Button>
            </Box>
        </Flex>
    )
} 