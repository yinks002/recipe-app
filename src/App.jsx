import { useEffect, useState } from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard';
import SearchBar from './components/SearchBar';










const App=()=> {

  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [isLoading,setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);


  const SearchRecipes = async()=>{
    setIsLoading(true);
    const url = apiUrl + query;
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.meals);
    console.log(data);
    setIsLoading(false);
  }
  useEffect(()=>{
    SearchRecipes();
  },[]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    SearchRecipes()
  }

  return (

    
   

    <div className="container">
      <h2>Recipe App</h2>
      <SearchBar handleSubmit={handleSubmit}
      onChange = {e => setQuery(e.target.value)}
      value={query}
      isLoading={isLoading}
      />
      <div className="recipes">
        {recipes ? recipes.map(recipe =>(
          <RecipeCard key={recipe.idMeal}
          recipe={recipe}/>
        )):(<>
        
        <h1>No recipes</h1>
        </>)}
      </div>
    </div>
  );
}

export default App;
