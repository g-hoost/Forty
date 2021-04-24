const DrinkUpload = () =>
{
  return (

    <article className="bg-dark-blue text-white p-12 text-center
    lg:text-left">
      <h1 className="font-secondary font-bold text-2xl mb-8
      lg:text-4xl lg:mb-12
      ">Füge deine eigenen Getränke hinzu!</h1>
      <section className="md:flex">
        <form className="text-dark-blue 
        lg:w-1/4">
          <input className="upload-input " type="text" placeholder="Name" />
          <input className="upload-input" type="text" placeholder="Kategorie" />
          <input className="upload-input" type="text" placeholder="Bild URL" />
          <input className="upload-input  h-28" type="textarea" placeholder="Anleitung" />
          <input className="upload-input" type="text" placeholder="Zutat 1" />
          <input className="upload-input" type="text" placeholder="Menge Zutat 1" />
          <input className="upload-input" type="text" placeholder="Zutat 2" />
          <input className="upload-input" type="text" placeholder="Menge Zutat 2" />
          <input className="upload-input" type="text" placeholder="Zutat 3" />
          <input className="upload-input" type="text" placeholder="Menge Zutat 3" />
          <input className="bg-light-blue text-white font-bold mt-2 py-2 px-20 rounded-2xl w-full" type="submit" placeholder="Submit" />
        </form>
        <div className="md:w-3/4 md:relative">
          <img className="hidden md:block absolute top-0 w-72	" src="./../img/image9.png" alt="" />
          <img className="hidden" src="./../img/image10.png" alt="" />
          <img className="hidden" src="./../img/image11.png" alt="" />
        </div>
      </section>
    </article>
  )

};

export default DrinkUpload;
