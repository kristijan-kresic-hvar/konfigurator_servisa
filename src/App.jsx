import React, { useState } from 'react'

// local components
import Navbar from './components/Navbar/Navbar'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'
import Configurator from './components/Configurator/Configurator'

// assets
import styles from './App.module.css'

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={styles.app}>
      <Navbar />
      <main className="w-11/12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center w-full mt-24">
          <h3 className="text-lg mb-16">Pritisnite gumb niže kako biste pokrenuli</h3>
          <Button
            onClick={() => setIsModalOpen(prevState => !prevState)}
          >
            Pokreni konfigurator
          </Button>
        </div>
        <Modal
          title="Konfigurator servisa"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(prevState => !prevState)}
        >
          <Configurator />
        </Modal>
      </main>
    </div>
  )
}

export default App