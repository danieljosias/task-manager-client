import { Box, VStack, HStack ,Heading } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Cardd } from '../Card'

export const List = ({index: listIndex, data}) => {

    return(
        <HStack >
            <Box bg='blackAlpha.100' minH={'300px'} minW={'300px'} p='3' m='5'>
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
                    <Button bg='blackAlpha.100' variant='solid' mt={4} size={{base:'sm'}} >Add Task</Button>
                </Box>
            </Box>
        </HStack>
    )
}