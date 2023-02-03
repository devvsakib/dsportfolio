import { Route, Routes } from 'react-router-dom';
import './index.css';
import './styles/global.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
