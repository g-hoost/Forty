import image9 from "./../img/image9.png";
import image10 from "./../img/image10.png";
import image11 from "./../img/image11.png";

const DrinkUpload = () => {
  //  function addItem(e) {
  //     e.preventDefault();
  //     e.target.reset();
  //     if (this.state.newItem === '') return;

  //     // Hinzufügen des neuen items in den firestore
  //     db.collection('items').add({
  //         name: this.state.newItem
  //     });

  //     // ...und in den lokalen State unserer React App
  //     this.setState({
  //       items: [...this.state.items, this.state.newItem], // Neues Item wird dem State hinzugefügt
  //       newItem: ''
  //     });
  //   }

  //   handleChange(value) {
  //     this.setState({ newItem: value });
  //   }

  return (

    <article className="bg-dark-blue text-white p-12 text-center
                        md:text-left">
      <h1 className="font-secondary font-bold text-2xl mb-8
                    md:mb-14 md:text-3xl 
                    lg:text-left lg:mb-12
      ">Füge deine eigenen Getränke hinzu!</h1>
      <section className="md:flex">
        <form className="text-dark-blue
                        md:w-1/3">
          <input className="upload-input " type="text" placeholder="Name" />
          <select className="upload-input" name="Kategorie">
            <option value="Gin">Gin</option>
            <option value="Vodka">Vodka</option>
            <option value="Rum">Rum</option>
            <option value="Scotch">Scotch</option>
            <option value="Alkoholfrei">Alkoholfrei</option>
          </select>
          <input className="upload-input" type="text" placeholder="Kategorie" />
          <input className="upload-input" type="text" placeholder="Bild URL" />
          <textarea
            className="upload-input h-28"
            type="textarea"
            placeholder="Anleitung"
          />
          <input className="upload-input" type="text" placeholder="Zutat 1" />
          <input
            className="upload-input"
            type="text"
            placeholder="Menge Zutat 1"
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
            // onClick={e => this.addItem(e)}
          />
        </form>

        <div className="md:w-2/3 md:relative md:w-full md:flex">
          <div className="md:w-1/2 md:relative">
            <img className="hidden absolute w-11/12 -right-2 top-10 
                            md:block " src={image9} alt="" />
            <img className="hidden absolute w-10/12 -right-2 bottom-32
                            md:block " 
                            src={image11} alt="" />
          </div>
          <img className="hidden absolute w-2/5 ml-4 -right-12 top-0 right-0
                          md:w-1/2 md:block " 
                          src={image10} alt="" />
        </div>
      </section>
    </article>
  );
};

export default DrinkUpload;
