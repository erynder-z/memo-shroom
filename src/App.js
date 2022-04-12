import './styles/App.css';
import './styles/Header.css';
import './styles/Main.css';
import './styles/Footer.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
