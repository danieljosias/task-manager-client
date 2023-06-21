import { useState, useRef } from 'react'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
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
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

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

    return (
        <Flex alignItems='center' justifyContent='center' p='5' bg='blue.300'>
            <Heading as='h1' size={{base: 'sm', md: 'md'}}>Task Manager</Heading>
            <Spacer/>
            
            <Box display='flex' alignItems='center' justifyContent='center' gap='1'>
                <IconButton size={{base:'sm'}} aria-label='Add icon' icon={<AddIcon/>} onClick={onOpen} />
                <Text fontWeight='bold' fontSize={{base: 'sm',md:'md'}}>Adicionar outra lista</Text>

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
