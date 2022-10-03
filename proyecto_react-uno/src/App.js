import './App.css';
import Bienvenida from './components/Bienvenida';
import Pelicula from './components/Pelicula';
import peliculas from './json/peliculas.json';
import './index.css'

function App() {
  return (
    <>
      <Bienvenida />
      {peliculas.map(peli =>
        <Pelicula
          title={peli.title}
          img={peli.img}
          genre={peli.genre}
          duration={peli.duration}
          date={peli.date}
          description={peli.description}
          actorOne={peli.actorOne}
          actorTwo={peli.actorTwo}
          actorThree={peli.actorThree}
          actorFour={peli.actorFour}
          actorFive={peli.actorFive}
          actorSix={peli.actorSix}
          actorSeven={peli.actorSeven}
          actorEight={peli.actorEight}
          actorNine={peli.actorNine}
          actorTen={peli.actorTen}
        ></Pelicula>)}
    </>
  );
}

export default App;
