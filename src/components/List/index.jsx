import { useState, useRef } from 'react'
import { Cardd } from '../Card'
import { Box, HStack, Heading } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
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

export const List = ({index: listIndex, data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const [input, setInput] = useState('')
    const toast = useToast()

    const handleInputChange = (e) => setInput(e.target.value)

    const handleData = () => {
        if(input === ''){
            toast({description:'Task required', status: 'error', duration: 4000,})
        }else{
            console.log(input)
            onClose()
            toast({description:'Task creates', status: 'success', duration: 4000,})
        }
    }

    return(
        <HStack >
            <Box bg='blackAlpha.200' minH={'300px'} minW={'300px'} p='3' m='5'>
                <Heading as='h2' size='sm' mb='3'>{data.title}</Heading>
                
                <Box display='flex' flexDirection='column' gap='3' maxH={'200px'} maxW={'300px'} overflowY='scroll' >
                    {data.cards.map((card, index) => {
                    return <Cardd 
                        key={card.id}
                        listIndex={listIndex}
                        index={index}
                        data={card}
                        />
                    })}
                </Box>

                <Box alignItems='center' justifyContent='center'>
                    <Modal
                        initialFocusRef={initialRef}
                        isOpen={isOpen}
                        onClose={onClose}    
                    >
                    <ModalOverlay />
                    <ModalContent >
                    <ModalHeader>Create your task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                    <FormControl isRequired>
                        <FormLabel>Task</FormLabel>
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
                    <Button bg='blackAlpha.100' _hover={{background: 'blue.300'}} variant='solid' mt={4} size={{base:'sm'}} onClick={onOpen}>Add Task</Button>
                </Box>
            </Box>
        </HStack>
    )
}