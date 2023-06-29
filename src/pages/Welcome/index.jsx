import { Flex, Spacer, Box, Heading, Image } from '@chakra-ui/react'
import { welcome } from '../../assets/welcome.webp'

export const Welcome = () => {
    return(
        <Flex>
            <Box>
                <Heading as='h1'>Task Manager</Heading>
            </Box>
            <Spacer/>
            <Box>
                <Image src={welcome} alt='welcome'/>
            </Box>
        </Flex>
    )
} 