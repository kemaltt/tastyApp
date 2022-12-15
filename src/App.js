import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailList from "./components/DetailList";
import MealList from "./components/MealList";
import Main from "./pages/Main";
import RandomItem from "./components/RandomItem";
import "./App.scss";
import "./assets/css/mediaQueries.scss";
import { AuthContextProvider } from "./context/AuthContext";
import Search from "./components/Search";

import { useState } from "react";

function App() {
  const [white, setWhite] = useState(true);

  return (
    <AuthContextProvider>
      <div className="App"
        style={{ color: white ? 'black' : 'white', backgroundColor: white ? 'white' : 'black' }}>
        <button onClick={() => setWhite(!white)}> → {white ? 'Blackmode' : 'Whitemode'}</button>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category/:name" element={<MealList />} />
          <Route path="/detail/:id" element={<DetailList />} />
          <Route path="/search/:input" element={<Search />} />
          <Route path="/detailrandom" element={<RandomItem />} />

        </Routes>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
