import "./App.css";
import Home from "./components/Home";
import { GlobalStyle } from "./styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
