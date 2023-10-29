import "./App.css";
import Navbar from "@/components/Navbar/NavBar";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <h2>STONKS</h2>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
