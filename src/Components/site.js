<Link to={`${currentURL}/${props.content.idDrink}`}>
<div className="flex items-center 
      md:flex md:flex-wrap md:inline-block">
    {currentIndex %2 == 0 ? <div><img className="w-60 pl-12 object-contain" src={`${props.content.strDrinkThumb}`} alt="Cocktail Img" />
    <h2 className="transform -rotate-90 font-bold text-2xl w-full">{props.content.strDrink}</h2></div> :
    <div><h2 className="transform -rotate-90 font-bold text-2xl w-full">{props.content.strDrink}</h2>
    <img className="w-60 pl-12 object-contain" src={`${props.content.strDrinkThumb}`} alt="Cocktail Img" />
    </div>
     }
</div>
</Link>
</>




return (
    <section className="md:flex md:flex-wrap">
      {this.state.items &&
        this.state.items.map((categorie, index) => (
            <div className="sort h-80 content-center flex w-full
                            md:w-1/2" 
            key={index}>
              {categorie.strDrink ? (
                <DrinkTile key={index} content={categorie} index={index} />
              ) : (
                <MainTile key={index} name={categorie} />
              )}
            </div>
        ))}
    </section>
  );