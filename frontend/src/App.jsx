import './App.css'
import AuthContext from './auth/AuthContext'
import AppRoute from './routes/AppRoute'

function App() {


  return (
     <AuthContext>
      <AppRoute />   
    </AuthContext>

  )
}

export default App
