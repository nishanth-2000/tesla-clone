import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { GlobalStyle } from "./styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
