function ArrayOne() {
  const numeros = [15, 10, 1, 25, 33, 155, 233, 0, 18];
  const arrayAntic = [...numeros];

  const fruites = [
    "Peres",
    "Peres",
    "Pomes",
    "Pressecs",
    "Pressecs",
    "Llimones",
    "LLimes",
    "LLimes",
    "prunes",
  ];
  const fruitesOriginal = [...fruites];

  const fruitesFinal = fruites.filter((valor, indice) => {
    return fruites.indexOf(valor) === indice;
  });
  const numerosFruites = arrayAntic.concat(fruitesOriginal);
  console.log(numerosFruites);

  const fruitesRepetides = fruites.filter((valor, indice) => {
    return fruites.indexOf(valor) !== indice;
  });

  const sumaArray = (numeros) => {
    let sumand = 0;
    numeros.forEach((numero) => {
      sumand += numero;
    });
    return sumand;
  };

  let sumaArr = sumaArray(numeros);
  let mitjana = sumaArr / numeros.length;

  numeros.splice(3, 0, 2, 23, 66);

  let numsOrdenats = numeros.sort((a, b) => {
    return a - b;
  });

  const mesPetit = numsOrdenats[0];
  const mesGran = numsOrdenats[numeros.length - 1];

  return (
    <>
      <h3>
        Benvingut món dels <em>arrays</em> i <em>objectes</em>
      </h3>
      <h5> Exercicis 1 i 2 </h5>
      <div className="row">
        <br />
        <h4> L'array original és: {arrayAntic.join()}</h4>
        <br />
        <h5> Afegim els numeros 23, 66 </h5>
        <h4> l'ordre dels numeros es: {numsOrdenats.join()} </h4>
        <br />
        <br />
        <div className=" col-md-6">
          <p> La suma del array es: </p>
          <p> La mitjana del array es: </p>
          <p> El número més petit es: </p>
          <p> El número més gran es: </p>
        </div>
        <div className=" col-md-6">
          <p> {sumaArr} </p>
          <p> {mitjana} </p>
          <p> {mesPetit} </p>
          <p> {mesGran} </p>
        </div>
      </div>
      <div className="row">
        <h5> Exercicis 3 i 4 </h5>
        <p>
          <b>Fruites que tenim:</b> {fruitesOriginal.join(" - ")}
        </p>
        <p>
          <b>Fruites que ens queden: </b> {fruitesFinal.join(" - ")}
        </p>
        <p>
          <b>Fruites Repetides: </b> {fruitesRepetides.join(" - ")}
        </p>
      </div>
      
    </>
  );
}

export default ArrayOne;
