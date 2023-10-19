export type Todo = {
  id: number
  text: string
  completed: boolean
  priority: number
  labels: Label[]
}

export type NewTodoPayload = {
  text: string
  labels: number[]
}

export type Label = {
  id: number
  name: string
}

export type NewLabelPayload = {
  name: string
}

export type UpdateTodoPayload = {
  id: number
  text?: string
  completed?: boolean
  priority?: number
  labels?: number[]
}
