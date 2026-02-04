import { RouterProvider } from 'react-router-dom'
import './style.css'
import { router } from './routes/routes'


function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
