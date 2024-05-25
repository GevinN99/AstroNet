import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Home from './pages/Home.jsx';
import MarsRoverPhotos from './pages/MarsRoverPhotos.jsx';
import AstronomyPictureOfDay from './pages/AstronomyPictureOfDay.jsx';
import EPICImages from './pages/EPICImages.jsx';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mrp" element={<MarsRoverPhotos />} />
                    <Route path="/apod" element={<AstronomyPictureOfDay />} />
                    <Route path="/epici" element={<EPICImages />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
