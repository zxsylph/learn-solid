import type { Component } from 'solid-js'

import logo from './logo.svg'
import styles from './App.module.css'
import Test from '@/component/Test'
import Button from '@/component/Button'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Test></Test>
        <Button></Button>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  )
}

export default App
