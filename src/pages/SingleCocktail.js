import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom'
import axios from "axios";

const SingleCocktail = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    setLoading(true)

    const fetchCocktail = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await response.data
        if(data.drinks){
          const {strDrink:name, strAlcoholic:info, strDrinkThumb:img, strCategory:category, strGlass:glass, strInstructions:instruction, 
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = data.drinks[0]

          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]

          const newCocktail = {name, info, category, glass, instruction, img, ingredients}
          setCocktail(newCocktail)
        }
        else{
          setCocktail(null)
        }   
      } catch (error) {
        console.log("error when retrieving cocktail");
      }
      setLoading(false)
    } 
    fetchCocktail()
  }, [id])
  
  if(loading){
    return <h2 className="section-title">Loading...</h2>
  }

  if(!cocktail){
    return <h2 className="section-title">No cocktail to display</h2>
  }

  const {name, info, category, glass, instruction, img, ingredients} = cocktail
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">Back Home</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={img} alt={name}/>
        <div className="drink-info">
        <p>
        <span className='drink-data'>name :</span> {name}
        </p>
        <p>
          <span className='drink-data'>category :</span> {category}
        </p>
        <p>
          <span className='drink-data'>info :</span> {info}
        </p>
        <p>
          <span className='drink-data'>glass :</span> {glass}
        </p>
        <p>
          <span className='drink-data'>instructons :</span> {instruction}
        </p>
          <p>
          <span className='drink-data'>ingredients :</span> 
            {
              ingredients.map((ingredient, index) => {
                return ingredient ? <span key={index}>{ingredient} |</span> : null
              })
            }
          </p>
          
        </div>
      </div>
    </section>
  )

}

export default SingleCocktail