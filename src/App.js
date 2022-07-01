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
    Header
  </header>
  <main className="page-main">
    <Main />
    Main
  </main>
  <aside className="page-sidebar">
    <Aside />
    Aside
  </aside>
  <footer className="page-footer">
    <Footer />
    Footer
  </footer>
</div>
  );
}

export default App;
