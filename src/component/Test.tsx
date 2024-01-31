import type { Component } from 'solid-js'

import { count, setCount } from '@/data/count'

const Test: Component = () => {
  return (
    <div>
      <h1>Test</h1>
      <div>{count()}</div>
    </div>
  )
}

export default Test
