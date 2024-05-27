import { VisibilityFilters } from '@/types'
import { EmptyMessage, TodoFilters } from '@/components'

interface MessageProps {
  filterState: string
  getTaskCounter(): {
    counter: number
    text: string
  }
}

const TodoMessage = ({ filterState, getTaskCounter }: MessageProps) =>
  filterState === VisibilityFilters.SHOW_COMPLETED ? (
    <>
      <EmptyMessage message="Não há tarefas completas ainda!" />
      <TodoFilters taskCounter={getTaskCounter()} />
    </>
  ) : (
    <>
      <EmptyMessage message="Adicione uma tarefa!" />
      <TodoFilters taskCounter={getTaskCounter()} />
    </>
  )

export default TodoMessage
