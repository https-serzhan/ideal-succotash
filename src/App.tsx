import './App.css'
import LoginForm from "./components/LoginForm.tsx";
import Button from "./components/Button/Button.tsx";
import UserListSearch from "./components/UserListSearch.tsx";
import ToggleBlock from "./components/ToggleBlock.tsx";

function App() {
  return (
      <div className="app">

          <UserListSearch/>

          <ToggleBlock/>

          <LoginForm />

          <Button onClick={() => console.log("Done")} children={'Click me'} variant='danger'/>

      </div>
  )
}

export default App
