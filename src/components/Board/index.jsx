import { useState } from "react"
import { loadList } from "../../services/api"
import BoardContext from './context'
import { List } from "../List"
import produce from 'immer'
const data = loadList()

export const Board = () => {
    const [lists, setLists] = useState(data)
    
    const move = (fromList, toList, from, to) =>{
        setLists(produce(lists, draft => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
        }))
    }

    return(
        <>
            <BoardContext.Provider value={{lists, move}}>
                {lists.map((list, index) => <List key={list.id} index={index} data={list} />)}
            </BoardContext.Provider>
        </>
    )
}