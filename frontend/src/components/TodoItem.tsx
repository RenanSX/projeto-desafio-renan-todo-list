import { useRef, useEffect } from 'react'
import { Item } from '@/types'

interface TodoItemProps {
  item: Item
  toggleItem(uuid: string, completed: boolean): void
  toggleEditItem(uuid: string): void
  updateItem(uuid: string, title: string, description: string): void
  removeItem(uuid: string): void
}

const TodoItem = ({
  item: { uuid, title, description, editing, completed },
  toggleItem,
  toggleEditItem,
  updateItem,
  removeItem
}: TodoItemProps) => {
  const inputTitle = useRef<HTMLInputElement>(null)
  const inputDescription = useRef<HTMLInputElement>(null)

  useEffect(() => inputTitle?.current?.focus())
  useEffect(() => inputDescription?.current?.focus())

  const acceptEdit = (itemID: string) => {
    const itemTitle = inputTitle?.current?.value?.trim() || ''
    const itemDescription = inputDescription?.current?.value?.trim() || ''

    if (itemTitle !== '' || itemDescription !== '') {
      updateItem(itemID, itemTitle, itemDescription)
      toggleEditItem(itemID)
    }
  }

  return (
    <li>
      {editing ? (
        <>
          <input className="edit-item" ref={inputTitle} defaultValue={title} />
          <input className="edit-item" ref={inputDescription} defaultValue={description} />
          <div>
            <span className="icon" role="presentation" onClick={() => acceptEdit(uuid)}>
              <i className="fas fa-save" />
            </span>
            <span className="icon" role="presentation" onClick={() => toggleEditItem(uuid)}>
              <i className="fas fa-ban" />
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="check-item-container">
            <div
              onClick={() => toggleItem(uuid, !completed)}
              role="presentation"
              className={completed ? 'checkbox-item checked' : 'checkbox-item'}
            />
            <div className="card-wrapper">
              <h4>{completed ? <s>{title}</s> : title}</h4>
              <span>{description}</span>
            </div>
          </div>
          <div>
            <span className="icon" role="presentation" onClick={() => toggleEditItem(uuid)}>
              <i className="fas fa-pencil-alt" />
            </span>
            <span className="icon" role="presentation" onClick={() => removeItem(uuid)}>
              <i className="fas fa-trash-alt" />
            </span>
          </div>
        </>
      )}
    </li>
  )
}

export default TodoItem
