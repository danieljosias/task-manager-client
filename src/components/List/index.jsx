import { Box, HStack, Heading } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Cardd } from '../Card'

export const List = ({index: listIndex, data}) => {

    return(
        <HStack>
            {data.cards.map((card, index) => {
                return <Box display='flex' flexDirection='column' gap='3' p='4' m='3' bg='blackAlpha.100' key={index}>
                    <Heading as='h2' size='sm'>😅 {data.title}</Heading>
                    <Cardd 
                        key={card.id}
                        listIndex={listIndex}
                        index={index}
                        data={card}
                    />
                    
                    <Box  alignItems='center' justifyContent='center' gap='4'>
                        <Button bg='blackAlpha.100' variant='solid' mt={4} size={{base:'sm'}} >Add Task</Button>
                    </Box>
                </Box>
            })}
        </HStack>
    )
}