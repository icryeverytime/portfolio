import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Aboutme from "./components/aboutme";
import Content from "./components/content";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Aboutme />
      <Portfolio />
      <a
        href="https://www.flaticon.com/free-icons/twitter"
        title="twitter icons"
      >
        Twitter icons created by Pixel perfect - Flaticon
      </a>
      <a href="https://www.flaticon.com/free-icons/github" title="github icons">
        Github icons created by riajulislam - Flaticon
      </a>
      <a
        href="https://www.flaticon.com/free-icons/linkedin"
        title="linkedin icons"
      >
        Linkedin icons created by riajulislam - Flaticon
      </a>
    </div>
  );
}

export default App;
