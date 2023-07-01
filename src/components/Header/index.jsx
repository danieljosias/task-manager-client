import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar , Flex, Spacer, Box, Button, Heading, Text, IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { RiLogoutCircleRLine} from 'react-icons/ri'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    useToast
} from '@chakra-ui/react'

export const Header = () => {
    const history = useHistory()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)

    const [input, setInput] = useState('')
    const toast = useToast()

    const handleInputChange = (e) => setInput(e.target.value)

    const handleData = () => {
        if(input === ''){
            toast({description:'List required', status: 'error', duration: 4000,})
        }else{
            console.log(input)
            onClose()
            toast({description:'List creates', status: 'success', duration: 4000,})
        }
    }

    const handleLogout = () => {
        history.push('/signin')
    }

    return (
        <Flex alignItems='center' justifyContent='center' p='5' bg='blue.300'>
            <Heading as='h1' size={{base: 'sm', md: 'md'}}>Task Manager</Heading>
            <Spacer/>
            
            <Box display='flex' alignItems='center' justifyContent='center' gap='2'>
                <IconButton size={{base:'xs', md:'sm'}} aria-label='Add icon' icon={<AddIcon/>} onClick={onOpen} />
                <Text fontWeight='bold' fontSize={{base: 'sm', md:'md'}}>Add other list</Text>
                <Avatar ml={{base:'1', xl: '5'}} name='Daniel Josias' size={{base:'xs', md:'sm'}}/>
                <IconButton onClick={handleLogout} size={{base:'xs', md:'sm'}} aria-label='logout' icon={<RiLogoutCircleRLine />}/>
                <Modal
                    initialFocusRef={initialRef}
                    isOpen={isOpen}
                    onClose={onClose}    
                >
                    <ModalOverlay />
                    <ModalContent >
                    <ModalHeader>Create your list</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                    <FormControl isRequired>
                        <FormLabel>List</FormLabel>
                        <Input ref={initialRef} value={input} onChange={handleInputChange} placeholder='Enter here' />
                    </FormControl>
                    </ModalBody>

                    <ModalFooter>  
                    <Button mr={3} variant={"outline"} _hover={{background: 'blue.300'}} onClick={handleData}>
                        Save
                    </Button>
                    <Button variant={"outline"} _hover={{background: 'red.300'}} onClick={onClose}>
                        Cancel
                    </Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>    
            </Box>
        </Flex>
    );
}
