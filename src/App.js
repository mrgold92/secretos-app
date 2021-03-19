import './App.css';
import Header from './components/Header/Header';
import Links from './components/Main/Links';
import Secretos from './components/Main/Secretos';

const App = () => {
  return (
    <div className="App">
     <Header/>
     <main>
        <Links/>
        <Secretos/>
     </main>
    </div>
  );
};

export default App;
