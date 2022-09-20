import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import CartoonMovie from "./pages/cartoon-movie/CartoonMovie";
import HomePage from './pages/home/HomePage';
import MovieTheaters from "./pages/movie-theaters/MovieTheaters";
import OddMoviePage from "./pages/odd-movie/OddMoviePage";
import SeriesMoviePage from "./pages/series-movie/SeriesMoviePage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/seriesmovies" element={<SeriesMoviePage />} />
      <Route path="/oddmovies" element={<OddMoviePage />} />
      <Route path="/movieTheaters" element={<MovieTheaters />} />
      <Route path="/cartoonMovies" element={<CartoonMovie />} />
    </Routes>
    </div>
  );
}

export default App;
