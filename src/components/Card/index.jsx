import { Card } from '@chakra-ui/card'
import { Text } from '@chakra-ui/react'
import { Box, HStack } from '@chakra-ui/layout'
import { useRef, useContext } from 'react' 
import BoardContext from '../Board/context'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useDrag, useDrop } from 'react-dnd'
import { IconButton } from '@chakra-ui/button'

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

    return(
      <Card p='3' bg='blue.100' cursor='grab' ref={ref} isDragging={isDragging}>
        <HStack>
          <Text fontWeight='bold' fontSize={{base: 'sm', md:'md'}} minW={'150'} maxW={'150'} overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{data.content}</Text>
          <Box>
              <IconButton mr='3' size={{base:'sm'}} aria-label='Edit icon' icon={<EditIcon/>}></IconButton>     
              <IconButton size={{base:'sm'}} aria-label='Delete icon' icon={<DeleteIcon/>}></IconButton>
          </Box>
        </HStack>
      </Card> 
    )
}