import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shopping from "./Pages/Shopping/Shopping";
import Recipes from "./Pages/Recipes/Recipes";
import Recipe from "./Pages/Recipe/Recipe";
import ShoppingList from "./Pages/ShoppingList/ShoppingList";
import Header from "./CustomCoponents/Header";
import './App.css'

function App() {
  return (
    <div className="mainWrapper">
      <div className="innerWrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
