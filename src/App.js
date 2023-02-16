import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import WatchList from "./Components/WatchList";
import Watched from "./Components/Watched";
import Add from "./Components/Add";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
