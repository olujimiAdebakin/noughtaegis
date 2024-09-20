
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'

function App() {
  

  return (
    <>
      <div className="app">
        {/* <meta name="color-scheme" content="dark" /> */}

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App
