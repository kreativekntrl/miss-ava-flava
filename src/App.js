import './App.scss';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Aside from './components/Aside.js';

function App() {
  return (
<div className="page-wrap">
  <header className="page-header">
    <Nav />
  </header>
  <main className="page-main">
    <Main />
  </main>
  <aside className="page-sidebar">
    <Aside />
  </aside>
  <footer className="page-footer">
    <Footer />
  </footer>
</div>
  );
}

export default App;
