import { VisibilityFilters } from '@/types'
import { EmptyMessage, TaskFilters } from '@/components'

interface MessageProps {
  filterState: string
  getTaskCounter(): {
    counter: number
    text: string
  }
}

const TaskMessage = ({ filterState, getTaskCounter }: MessageProps) =>
  filterState === VisibilityFilters.SHOW_COMPLETED ? (
    <>
      <EmptyMessage message="Não há tarefas completas ainda!" />
      <TaskFilters taskCounter={getTaskCounter()} />
    </>
  ) : (
    <>
      <EmptyMessage message="Adicione uma tarefa!" />
      <TaskFilters taskCounter={getTaskCounter()} />
    </>
  )

export default TaskMessage
