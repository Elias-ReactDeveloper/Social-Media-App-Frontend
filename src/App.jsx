import { Container } from "@mui/material"

import Post from "./components/Post"
import AppBar from "./components/AppBar"
import RightMenu from "./components/RightMenu/RightMenu"

function App() {
  return (
    <div className="App">
      <AppBar />
      <RightMenu />
      <Container sx={{width: 700, marginTop: "80px"}}>
        <Post />
        <Post />
        <Post />
      </Container>

    </div>
  )
}

export default App
