import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './index.css';
import './styles/global.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import BGShape from './components/BGShape';
import { ThemeContext } from './context/ThemeContext';

const getThemeStatus = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : false;
}


function App() {

  const [theme, setTheme] = useState(getThemeStatus || false);
  localStorage.setItem('theme', theme)
  theme ? document.body.style.background = "white" : document.body.style.background = ""

  return (
    <Layout>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        {/* <BGShape/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/about' element={<About theme={theme} />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/secret' element={<NotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </Layout>
  );
}

export default App;
