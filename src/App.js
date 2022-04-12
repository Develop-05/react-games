import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { GamePage } from "./pages/GamePage/GamePage";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import { Provider } from "react-redux";
import { store } from "./redux/index";

function App() {
  return (
      <Provider store={ store }>
        <div className="App">
          <Header />
            <Routes>
              <Route path="/order" element={<OrderPage />} />
              <Route path="/app/:title" element={<GamePage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
      </Provider>
  );
}

export default App;
