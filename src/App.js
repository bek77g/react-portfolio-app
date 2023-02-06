import './scss/style.scss';
//styles
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Contacts from './pages/Contacts';
import Layout from './layout/Layout';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to='/' element={<Layout />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route path='/projects/:id' element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
