import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import './App1.css';

function App() {

  function showMessage(message) {
    alert(message);
  }
  return (
    <>
      <Header />
      <main className ="main">
      <Sidebar showMessage ={showMessage}/>
      <section className = "content">
        <h2>Welcome to My Website</h2>
        <p>React is all about re-using code, and it can be a good idea to split your components into separate files.</p>
        </section>
        </main>
      <Footer />
    </>
  );
}

export default App;
