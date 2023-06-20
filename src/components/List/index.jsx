//import { Card } from '../Card'

export const List = ({data, index: listIndex}) => {

    return(
        <HStack>
            {data.cards.map((card, index) => {
                return <Box display='flex' flexDirection='column' gap='3' p='4' m='3' bg='blackAlpha.100'>
                    <Heading as='h2' size='sm'>😅 {data.title}</Heading>
                    {/* <Cardd 
                        key={card.id}
                        listIndex={listIndex}
                        index={index}
                        data={card}
                    /> */}
                    
                    <Box  alignItems='center' justifyContent='center' gap='4'>
                        <Button bg='blackAlpha.100' variant='solid' mt={4} onClick={onOpen} size={{base:'sm'}} >Add Task</Button>
                    </Box>
                </Box>
            })}
        </HStack>
    )
}