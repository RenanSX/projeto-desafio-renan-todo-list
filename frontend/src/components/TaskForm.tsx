import { FormEvent, useRef, useEffect } from 'react'

interface TaskFormProps {
  emptyList: boolean
  addItem(title: string, description: string): void
}

const TaskForm = ({ emptyList, addItem }: TaskFormProps) => {
  const inputText = useRef<HTMLInputElement>(null)
  const inputDescription = useRef<HTMLInputElement>(null)

  const focusInputText = () => inputText?.current?.focus()
  const focusInputDescription = () => inputDescription?.current?.focus()

  useEffect(() => {
    if (emptyList) {
      focusInputText()
      focusInputDescription()
    }
  })

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

    if (
      inputText &&
      inputText.current &&
      inputText.current.value !== '' &&
      inputDescription &&
      inputDescription.current &&
      inputDescription.current.value !== ''
    ) {
      addItem(inputText.current.value, inputDescription.current.value)
      inputText.current.value = ''
      inputDescription.current.value = ''
    }
  }

  return (
    <form data-testid="Task-form" onSubmit={submitHandler}>
      <input ref={inputText} placeholder="Insira um título" />
      <input ref={inputDescription} placeholder="Insira a descrição da tarefa" />
      <button type="submit">
        <i className="fas fa-plus" />
      </button>
    </form>
  )
}

export default TaskForm
