import { Container } from "@mui/material"

import Post from "./components/Post"
import AppBar from "./components/AppBar"

function App() {
  return (
    <div className="App">
      <AppBar />
      <Container sx={{width: 700, marginTop: "80px"}}>
        <Post />
        <Post />
        <Post />
      </Container>

    </div>
  )
}

export default App
