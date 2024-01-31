import { createSignal } from 'solid-js'

const [count, setCount] = createSignal<number>(0)

export { count, setCount }
