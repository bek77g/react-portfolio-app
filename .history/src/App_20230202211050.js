//styles
import { BrowserRouter, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './scss/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
