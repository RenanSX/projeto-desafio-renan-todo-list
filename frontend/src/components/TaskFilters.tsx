import FilterLink from '@/containers/FilterLink'
import { VisibilityFilters } from '@/types'

interface CounterProps {
  taskCounter: {
    counter: number
    text: string
  }
}

const TaskFilters = ({ taskCounter: { counter, text } }: CounterProps) => (
  <div className="filters-container">
    <div>
      <span className="active">{counter}</span> <span>{text}</span>
    </div>
    <div className="filters">
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>Todas</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Ativos</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completos</FilterLink>
    </div>
  </div>
)

export default TaskFilters
