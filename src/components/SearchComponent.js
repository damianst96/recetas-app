import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './RecipeCard';

function SearchComponent(){
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");

    const showData = async function(){
        const response = await fetch("/api");
        const data = response.json();
        console.log(data)
    }

}

export default SearchComponent;