import EditTemplate from '@/app/ui/invitation-categories/edit-template'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default async function Page () {
  return (
    <div className='flex flex-col items-center px-5'>
      <DndProvider backend={HTML5Backend}>
      <EditTemplate />
      </DndProvider>
    </div>
  )
}
