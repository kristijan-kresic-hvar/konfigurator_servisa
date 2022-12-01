import React from 'react'

// local components
import Navbar from './components/Navbar/Navbar'

// assets
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
    </div>
  )
}

export default App