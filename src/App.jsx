import SearchInput from "./components/SearchInput";

import "./App.css"
import userData from "./data/users";

function App() {

  return (
    <>
      <SearchInput userData={userData} />
    </>
  )
}

export default App; 
