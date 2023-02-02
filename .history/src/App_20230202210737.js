//styles
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './scss/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
