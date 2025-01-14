import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/Home"
import UploadPage from "./pages/UploadPage"
import DownloadPage from "./pages/downloadPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
