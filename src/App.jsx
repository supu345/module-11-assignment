import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Service from "./components/Service";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Service />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
