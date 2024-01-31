import type { Component } from 'solid-js'

import { count, setCount } from '@/data/count'

const Button: Component = () => {
  return (
    <div>
      <button
        onClick={() => {
          setCount(count() + 1)
        }}
      >
        add
      </button>
      <div>{count()}</div>
    </div>
  )
}

export default Button
