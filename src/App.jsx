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

function App() {
  return (
    <Layout>
      <Header />
      {/* <BGShape/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/secret' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
