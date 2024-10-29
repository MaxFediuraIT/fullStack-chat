import { Outlet } from "react-router-dom"
import AuthLayout from "./layoutes/AuthLayout"

function App() {

  return (
    <main>
      <AuthLayout>
        <Outlet />
        </AuthLayout>
    </main>
  )
}

export default App
