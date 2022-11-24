import Posts from "./components/Posts/Posts"
import AppBar from "./components/AppBar"
import RightMenu from "./components/RightMenu/RightMenu"
import LeftMenu from "./components/LeftMenu/LeftMenu"

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: "60px" }}>
        <AppBar />
      </div>
      <RightMenu />
      <LeftMenu />
      <Posts />
    </div>
  )
}

export default App


