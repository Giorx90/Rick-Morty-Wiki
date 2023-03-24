import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import SingleCharacterPage from './pages/SingleCharacterPage';
import LocationsPage from './pages/LocationsPage';
import SingleLocationPage from './pages/SingleLocationPage';
import ChronologyPage from './pages/ChronologyPage';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import TranslationComponent from './components/TranslationComponent/TranslationComponent';

function App() {
  return (
    <div className="App">
      <div class="App-trans">
        <TranslationComponent></TranslationComponent>
      </div>
      <div class="App-routes">
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/characters" element={<CharactersPage/>}></Route>
          <Route exact path="/character/:id" element={<SingleCharacterPage/>}></Route>
          <Route exact path="/locations" element={<LocationsPage/>}></Route>
          <Route exact path="/location/:id" element={<SingleLocationPage/>}></Route>
          <Route exact path="/chronology" element={<ChronologyPage/>}></Route>
        </Routes>
      </div>
      <div class="App-nav">
        <NavigationComponent></NavigationComponent>
      </div>
    </div>
  );
}

export default App;
