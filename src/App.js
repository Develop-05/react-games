import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import { Header } from './components/header/header'
import { HomePage } from './pages/home-page/home-page';
import { OrderPage } from './pages/order-page/order-page';
import { GamePage } from './pages/game-page/game-page';
import {store} from './redux'

function App() {
  return (
 <>
   <Provider store={store}>
  <div className="App">
   <Header />

  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>

  <Routes>
    <Route path="/app/:title" element={<GamePage />} />
  </Routes>

  <Routes>
    <Route path="/order" element={<OrderPage />} />
  </Routes>

 </div>
 </Provider>
 </>
  );
}

export default App;
