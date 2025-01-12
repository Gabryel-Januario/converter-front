import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/Home"
import UploadPage from "./pages/UploadPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
