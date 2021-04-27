import image9 from "./../img/image9.png";
import image10 from "./../img/image10.png";
import image11 from "./../img/image11.png";

import db from "./../services/firebase";

const DrinkUpload = () => {
  const addItem = (e) => {
    e.preventDefault();

    db.collection(e.target[1].value).add({
      drinkFromDb: true,
      strDrink: e.target[0].value,
      strDrinkThumb: e.target[2].value,
      strInstructionsDE: e.target[3].value,
      strMeasure1: e.target[4].value,
      strIngredient1: e.target[5].value,
      strMeasure2: e.target[6].value,
      strIngredient2: e.target[7].value,
      strMeasure3: e.target[8].value,
      strIngredient3: e.target[9].value,
    });
    e.target.reset();
  };

  return (
    <article
      className="bg-dark-blue text-white p-12 text-center
                        md:text-left"
    >
      <h1
        className="font-secondary font-bold text-2xl mb-8
                    md:mb-14 md:text-3xl 
                    lg:text-left lg:mb-12
      "
      >
        Füge deine eigenen Getränke hinzu!
      </h1>
      <section className="md:flex">
        <form
          className="text-dark-blue
                        md:w-1/3"
          onSubmit={(e) => addItem(e)}
        >
          <input
            className="upload-input "
            type="text"
            placeholder="Name"
            required
          />
          <select className="upload-input" name="Kategorie" required>
            <option value="Gin">Gin</option>
            <option value="Vodka">Vodka</option>
            <option value="Rum">Rum</option>
            <option value="Scotch">Scotch</option>
            <option value="Alkoholfrei">Alkoholfrei</option>
          </select>
          <input
            className="upload-input"
            type="text"
            placeholder="Bild URL"
            // required
          />
          <textarea
            className="upload-input h-28"
            type="textarea"
            placeholder="Anleitung"
            // required
          />
          <input
            className="upload-input"
            type="text"
            placeholder="Zutat 1"
            // required
          />
          <input
            className="upload-input"
            type="text"
            placeholder="Menge Zutat 1"
            // required
          />
          <input className="upload-input" type="text" placeholder="Zutat 2" />
          <input
            className="upload-input"
            type="text"
            placeholder="Menge Zutat 2"
          />
          <input className="upload-input" type="text" placeholder="Zutat 3" />
          <input
            className="upload-input"
            type="text"
            placeholder="Menge Zutat 3"
          />
          <input
            className="bg-light-blue text-white font-bold mt-2 py-2 px-20 rounded-2xl w-full"
            type="submit"
            placeholder="Submit"
          />
        </form>

        <div className="md:w-2/3 md:relative md:w-full md:flex">
          <div className="md:w-1/2 md:relative">
            <img
              className="hidden absolute w-11/12 -right-2 top-10 
                            md:block "
              src={image9}
              alt=""
            />
            <img
              className="hidden absolute w-10/12 -right-2 bottom-32
                            md:block "
              src={image11}
              alt=""
            />
          </div>
          <img
            className="hidden absolute w-2/5 ml-4 -right-12 top-0 right-0
                          md:w-1/2 md:block "
            src={image10}
            alt=""
          />
        </div>
      </section>
    </article>
  );
};

export default DrinkUpload;
