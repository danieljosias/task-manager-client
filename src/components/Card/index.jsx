import { useState, useRef, useContext } from 'react'
import { Card } from '@chakra-ui/card'
import { Text } from '@chakra-ui/react'
import { Box, HStack } from '@chakra-ui/layout'
import BoardContext from '../Board/context'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useDrag, useDrop } from 'react-dnd'
import { IconButton } from '@chakra-ui/button'
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

export const Cardd = ({listIndex, index, data}) => {
    const ref = useRef();
    const { move } = useContext(BoardContext);
  
    const [{ isDragging }, dragRef] = useDrag({
      item: { type: 'CARD', index, listIndex },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    const [, dropRef] = useDrop({
      accept: 'CARD',
      hover(item, monitor) {
        const draggedListIndex = item.listIndex;
        const targetListIndex = listIndex;
  
        const draggedIndex = item.index;
        const targetIndex = index;
  
        if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
          return;
        }
  
        const targetSize = ref.current.getBoundingClientRect();
        const targetCenter = (targetSize.bottom - targetSize.top) / 2;
  
        const draggedOffset = monitor.getClientOffset();
        const draggedTop = draggedOffset.y - targetSize.top;
  
        if (draggedIndex < targetIndex && draggedTop < targetCenter) {
          return;
        }
  
        if (draggedIndex > targetIndex && draggedTop > targetCenter) {
          return;
        }
  
        move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
  
        item.index = targetIndex;
        item.listIndex = targetListIndex;
      }
    })
  
    dragRef(dropRef(ref));

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)

    const [input, setInput] = useState('')
    const toast = useToast()

    const handleInputChange = (e) => setInput(e.target.value)

    const handleData = () => {
        if(input === ''){
            toast({description:'Task required', status: 'error', duration: 4000,})
        }else{
            console.log(input)
            onClose()
            toast({description:'Task creates', status: 'success', duration: 4000, colorScheme:'blue'})
        }
    }

    const handleDelete = () => {
      toast({description: 'Task deleted', status: 'success', duration: 4000, colorScheme:'blue'})
    }

    return(
      <Card p='3' bg='blue.300' cursor='grab' ref={ref} isDragging={isDragging}>
        <HStack>
          <Text fontWeight='bold' fontSize={{base: 'sm', md:'md'}} minW={'150'} maxW={'150'} overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{data.content}</Text>
          <Box>
              <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}    
              >
                <ModalOverlay />
                <ModalContent >
                <ModalHeader>Edit your task</ModalHeader>
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
                
              <IconButton mr='3' size={{base:'sm'}} aria-label='Edit icon' onClick={onOpen} icon={<EditIcon/>}></IconButton>     
              <IconButton size={{base:'sm'}} aria-label='Delete icon' onClick={handleDelete} icon={<DeleteIcon/>}></IconButton>
          </Box>
        </HStack>
      </Card> 
    )
}