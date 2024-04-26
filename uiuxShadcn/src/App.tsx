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
        
          <Route path="https://uiuxfinal-b2mwsticn-miro-kymalainens-projects.vercel.app/" element={<Home />} />
          <Route path="https://uiuxfinal-b2mwsticn-miro-kymalainens-projects.vercel.app/shopping" element={<Shopping />} />
          <Route path="https://uiuxfinal-b2mwsticn-miro-kymalainens-projects.vercel.app/recipes" element={<Recipes />} />
          <Route path="https://uiuxfinal-b2mwsticn-miro-kymalainens-projects.vercel.app/recipe" element={<Recipe />} />
          <Route path="https://uiuxfinal-b2mwsticn-miro-kymalainens-projects.vercel.app/shopping-list" element={<ShoppingList />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
