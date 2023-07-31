import { useState, useRef, useContext } from 'react'
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
import { ApiContext } from '../../providers/api'

export const List = ({index: listIndex, lists}) => {
    const { createsTasks, tasks } = useContext(ApiContext)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)

    const [content, setContent] = useState('')
    const toast = useToast()

    const handleInputChange = (e) => setContent(e.target.value)

    const userId = localStorage.getItem('userId')
    const listId = lists[0]?.id

    const data = {
        content: content,
        user_id: userId,
        list_id: listId
    }

    const handleData = async () => {
        const response = await createsTasks(data)

        if(content === ''){
            toast({description:'Task required', status: 'error', duration: 4000,})
        }else if(response.data !== 'AxiosError'){
            onClose()
            toast({description:'Task creates', status: 'success', duration: 4000, colorScheme:'blue'})
        }
    }

    return(
        <HStack >
            {tasks.map((task, index) => {
                return <Box key={index} bg='blackAlpha.200' minH={'300px'} minW={'300px'} p='3' m='5'>
                     <Heading as='h2' size='sm' mb='3'>{lists[0].title}</Heading>

                    <Box display='flex' flexDirection='column' gap='3' maxH={'200px'} maxW={'300px'} overflowY='scroll' >
                        <Cardd 
                            key={task.id}
                            listIndex={listIndex}
                            index={index}
                            data={task}
                        />
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
                            <FormLabel>Task Name</FormLabel>
                            <Input ref={initialRef} value={content} onChange={handleInputChange} placeholder='Enter here' />
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
            })}
        </HStack>
    )
}