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

<div className="hidden p-6 pr-0 md:max-h-auto
                        md:w-2/3 md:w-full md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4">
            <div className="p-6 pt-12 md:row-span-2">
              <img className="md:w-full md:object-cover md:col-start-1 md:row-start-1 md:row-span-2" src={image9} alt="" />
              <img className="md:w-3/4 md:col-start-1 md:row-start-2 mt-10" 
                            src={image11} alt="" />
            </div>
          <img className="md:w-full md:block md:col-start-2 md:row-span-2" 
                          src={image10} alt="" />
        </div>

<div className="hidden p-6 pr-0 md:max-h-auto
md:w-2/3 md:w-full md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">

<img className="md:w-full md:object-cover md:col-start-1 md:row-start-1 md:place-self-end" src={image9} alt="" />
<img className="md:w-3/4 md:col-start-1 md:row-start-2 md:justify-self-end" 
src={image11} alt="" />

<img className="md:w-full md:block md:col-start-2 md:row-span-2" 
  src={image10} alt="" />
</div>
</section>
</article>