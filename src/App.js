import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Header } from "./components/header/header";
import { HomePage } from "./pages/home-page/home-page";
import { GamePage } from "./pages/game-page/game-page";
import { OrderPage } from "./pages/order-page/order-page";
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
