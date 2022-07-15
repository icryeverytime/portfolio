import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Aboutme from "./components/aboutme";
import Content from "./components/content";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Aboutme />
      <Portfolio />
     <Footer />
    </div>
  );
}

export default App;
