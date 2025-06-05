import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomeScreen from './pages/HomeScreen';
import ProjectScreen from './pages/ProjectScreen';
import { ThemeProvider } from './context/ThemeContext';
import ProfileScreen from './pages/ProfileScreen';
function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/projects" element={<ProjectScreen />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;


