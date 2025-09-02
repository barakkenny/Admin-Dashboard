import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact={true} element={<Dashboard />}/>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
