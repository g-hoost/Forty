import image9 from './../img/image9.png';
import image10 from './../img/image10.png';
import image11 from './../img/image11.png';

const DrinkUpload = () =>
{
  return (

    <article className="bg-dark-blue text-white p-12 text-center
    md:text-left">
      <h1 className="font-secondary font-bold text-2xl mb-8
      md:mb-14 md:text-3xl lg:text-left lg:mb-12
      ">Füge deine eigenen Getränke hinzu!</h1>
      <section className="md:flex">
        <form className="text-dark-blue 
        md:w-1/3">
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
        <div className="md:w-2/3 md:relative md:w-full md:flex">
          <div className="md:w-1/2 md:relative">
            <img className="hidden md:block absolute w-11/12 right-2 top-10 " src={image9} alt="" />
            <img className="hidden md:block absolute w-9/12 right-2 bottom-20" src={image11} alt="" />
          </div>
          <img className="hidden md:w-1/2 md:block absolute w-2/5 ml-4 -right-12 top-0 right-0" src={image10} alt="" />
        </div>
      </section>
    </article>
  )

};

export default DrinkUpload;
