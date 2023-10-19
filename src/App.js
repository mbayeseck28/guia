import './App.css';

import Header from './Composants/Header';
import Cartes from './Composants/Cartes';
import Frequently from './Composants/Frequently';
import Teams from './Composants/Teams';
import Footer from './Composants/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="bg-light">
      <Header />
      <Cartes />
      <Frequently />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;
