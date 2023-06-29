import { DndProvider } from "react-dnd"
import HTML5Backend from 'react-dnd-html5-backend'
import { Router } from './routes'

export const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router/>
    </DndProvider>
  )
}

