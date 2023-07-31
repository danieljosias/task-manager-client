import { useContext, useState } from "react"
import BoardContext from './context'
import { List } from "../List"
import produce from 'immer'
import { Box } from "@chakra-ui/react"
import { ApiContext } from "../../providers/api"

export const Board = () => {
    const { lists, setLists } = useContext(ApiContext)
    
    const move = (fromList, toList, from, to) =>{
        setLists(produce(lists, draft => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
        }))
    }

    return(
        <BoardContext.Provider value={{lists, move}}>
            <Box display='flex' overflowX='scroll'>
                {lists.map((list, index) => <List key={list.id} listIndex={index} lists={list.data} />)}
            </Box>
        </BoardContext.Provider>
    )
}