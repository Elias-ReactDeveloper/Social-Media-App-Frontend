import Posts from "./components/Posts/Posts"
import AppBar from "./components/AppBar"
import RightMenu from "./components/RightMenu/RightMenu"
import LeftMenu from "./components/LeftMenu/LeftMenu"
import CreatePost from "./components/Posts/CreatePost"
import AddPostButton from "./components/Posts/AddPostButton"
import { useState } from "react"

function App() {

  const [openAddPost, setOpenAddPost] = useState(false);

  const handleCloseAddPost = () => {
    setOpenAddPost(false) 
  }

  const handleOpenAddPost = () => {
    setOpenAddPost(true) 
  }

  return (
    <div className="App">
      <div style={{ marginBottom: "60px" }}>
        <AppBar />
      </div>
      <RightMenu />
      <LeftMenu />
      <Posts />
      <CreatePost 
        openAddPost={openAddPost} 
        setOpenAddPost={setOpenAddPost} 
        handleCloseAddPost={handleCloseAddPost} 
      />
      <AddPostButton 
        openAddPost={openAddPost} 
        setOpenAddPost={setOpenAddPost} 
        handleCloseAddPost={handleCloseAddPost} 
        handleOpenAddPost={handleOpenAddPost}
      />

    </div>
  )
}

export default App


