const DrinkUpload = () =>
{
  return (
    <article>
      <h1>Füge deine eigenen Getränke hinzu!</h1>
      <img src="../img/image9.png" alt="" />
      <img src="../img/image10.png" alt="" />
      <img src="../img/image11.png" alt="" />
      <form>
        <input type="text" value="Name" placeholder="Name" />
        <input type="text" value="Kategorie" placeholder="Kategorie" />
        <input type="text" value="Bild URL" placeholder="Bild URL" />
        <input type="text" value="Anleitung" placeholder="Anleitung" />
        <input type="text" value="Zutat 1" placeholder="Zutat 1" />
        <input type="text" value="Menge Zutat 1" placeholder="Menge Zutat 1" />
        <input type="text" value="Zutat 2" placeholder="Zutat 2" />
        <input type="text" value="Menge Zutat 2" placeholder="Menge Zutat 2" />
        <input type="text" value="Zutat 3" placeholder="Zutat 3" />
        <input type="text" value="Menge Zutat 3" placeholder="Menge Zutat 3" />
        <input type="submit" value="Submit" placeholder="Submit" />
      </form>
    </article>
  )

};

export default DrinkUpload;
