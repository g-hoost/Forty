const DrinkUpload = () =>
{
  return (
    <article>
      <h1>Füge deine eigenen Getränke hinzu!</h1>
      <img src="../img/image9.png" alt="" />
      <img src="../img/image10.png" alt="" />
      <img src="../img/image11.png" alt="" />
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Kategorie" />
        <input type="text" placeholder="Bild URL" />
        <input type="text" placeholder="Anleitung" />
        <input type="text" placeholder="Zutat 1" />
        <input type="text" placeholder="Menge Zutat 1" />
        <input type="text" placeholder="Zutat 2" />
        <input type="text" placeholder="Menge Zutat 2" />
        <input type="text" placeholder="Zutat 3" />
        <input type="text" placeholder="Menge Zutat 3" />
        <input type="submit" placeholder="Submit" />
      </form>
    </article>
  )

};

export default DrinkUpload;
