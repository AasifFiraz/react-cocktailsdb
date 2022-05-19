import React, {useState, useEffect} from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    setLoading(true)
    const getDrinks = async () => {
      
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
        const data = response.data
        const {drinks} = data
        if (drinks){

          const newCocktails = drinks.map((cocktail) => {
            const {strDrink, idDrink, strDrinkThumb, strAlcoholic, strGlass} = cocktail
            return {id:idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
          })
          setCocktails(newCocktails)
          setLoading(false)
        }
        else{
          setLoading(false)
          setCocktails([])
        }
      } catch (error) {
        console.log("error when fetching cocktail");
      }

    }

    getDrinks()
  }, [searchValue])

  return (
    <>
      <main>
        <SearchForm setSearchValue={setSearchValue} />
        <CocktailList loading={loading} cocktails={cocktails} />
      </main>
    </>
  )
}

export default Home