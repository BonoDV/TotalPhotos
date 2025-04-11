import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { PhotosContext } from './context/photoContext.js';
import Header from './components/Header';
import Home from './views/Home.jsx';
import Favorites from './views/Favorites.jsx';
import './styles/App.css';

import { Provider } from 'react-redux';
import store from './redux/store/store.js';

function App() {
  const [photosData, setPhotosData] = useState([]);
  return (
    <Provider store={store}>
      <PhotosContext.Provider value={{ photosData, setPhotosData }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </PhotosContext.Provider>
    </Provider>
  );
}

export default App;
