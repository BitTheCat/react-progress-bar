import { useState } from 'react'
import ProgressBar from './ProgressBar.jsx'
import './App.css'

function App() {
    const [progress, setProgress] = useState(0)

    function updateProgress() {
        if (progress + 10 <= 100)
            setProgress(progress + 10)
        else 
            setProgress(100)
    }

  return (
    <div>
        <ProgressBar progress={progress} />
        <button onClick={updateProgress}>Increase Progress</button>
    </div>
  )
}

export default App
