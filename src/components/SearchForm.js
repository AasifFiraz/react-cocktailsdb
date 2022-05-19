import React, {useEffect, useRef} from "react";

const SearchForm = ({ setSearchValue }) => {
  const cocktailContainer = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const searchCocktail = () => {
    setSearchValue(cocktailContainer.current.value)
  }

  useEffect(() => {
    cocktailContainer.current.focus()
  }, [])

  return (
    <>
      <section className="section">
        <h2 className="section-title">
          Search Cocktails
        </h2>
        <form className="form search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Search your favourite cocktail</label>
            <input type="text" name="name" id="name" ref={cocktailContainer} onChange={searchCocktail}/>
          </div>
        </form>
      </section>
    </>
  )
}

export default SearchForm
