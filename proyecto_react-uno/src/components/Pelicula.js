function Pelicula(props) {
    return (
        <section>
            <h2 class="titu-lo1">{props.title}</h2>
            <hr class="linea-tit" />
            <div class="sinopsis">
                <img class="peliculas" src={props.img} alt="civil war" />
                <div>
                    <nav class="articulo">
                        <article>{props.genre}</article>
                        <article>{props.duration}</article>
                        <article>{props.date}</article>
                    </nav>
                    <p>{props.description}</p>
                    <h2>Actores</h2>
                    <ul>
                        <li>{props.actorOne}</li>
                        <li>{props.actorTwo}</li>
                        <li>{props.actorThree}</li>
                        <li>{props.actorFour}</li>
                        <li>{props.actorFive}</li>
                        <li>{props.actorSix}</li>
                        <li>{props.actorSeven}</li>
                        <li>{props.actorEight}</li>
                        <li>{props.actorNine}</li>
                        <li>{props.actorTen}</li>
                    </ul>
                </div>
            </div>
            <hr class="linea-final" />
        </section>
    );
}

export default Pelicula;