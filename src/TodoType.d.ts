type Todo = {
    text: string
    complete: boolean
}
type toggleTodo= (selectedTodo: Todo) => void

type deltodo=(delTodo:Todo)=>void