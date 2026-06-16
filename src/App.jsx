import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import AttendTrackGallery from './pages/AttendTrackGallery'

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendtrack-gallery" element={<AttendTrackGallery />} />
      </Routes>
    </ThemeProvider>
  )
}
