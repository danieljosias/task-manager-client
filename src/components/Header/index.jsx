import { Box, Heading, Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

export const Header = () => {
    return (
        <Flex alignItems='center' justifyContent='center' p='5'>
            <Heading as='h1' size={{base: 'sm', md: 'md'}}>Task Manager</Heading>
            <Spacer/>
            
            <Box display='flex' alignItems='center' justifyContent='center' gap='1'>
                <IconButton size={{base:'sm'}} aria-label='Add icon' icon={<AddIcon/>}></IconButton>
                <Text fontWeight='bold' fontSize={{base: 'sm',md:'md'}}>Adicionar outra lista</Text>
            </Box>
        </Flex>
    );
}
