import React from 'react'

// local components
import Navbar from './components/Navbar/Navbar'
import Button from './components/Button/Button'

// assets
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className="w-11/12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center w-full mt-24">
          <h3 className="text-lg mb-16">Pritisnite gumb niže kako biste pokrenuli</h3>
          <Button>
            Pokreni konfigurator
          </Button>
        </div>
      </main>
    </div>
  )
}

export default App