import {} from "react-router-dom";

export default function About() {
  return (
    <section id="about">
      <div className="flex flex-col bg-black to-pink-500 text-white text-center text-xl">

    <div className="objetc-cover mx-auto">
    <svg width="263" height="263" viewBox="0 0 263 263" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="263" height="263" fill="url(#pattern0_60_14)"/>
    <defs>
    <pattern id="pattern0_60_14" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_60_14" transform="scale(0.0015625)"/>
    </pattern>
    <image id="image0_60_14" width="640" height="640" xlinkHref="data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJiW/wW0LDuJ3f5RwgAAAABJRU5ErkJggg=="/>
    </defs>
    </svg>
    </div>

      <h1>ABOUT US</h1>

    <div className="flex-1 w-5/6 mx-auto p-4 text-sm h-full shadow-lg text-left indent-7">

      <p className="font-next_art">
        ASCENT SOFTWARE NACE EN EL CORAZÓN DE LA INNOVACIÓN TECNOLÓGICA, UN
        ESTUDIO DE DESARROLLO DE VIDEOJUEGOS QUE SE FUNDÓ CON LA VISIÓN DE
        ELEVAR EL ESTÁNDAR DE LA INDUSTRIA DEL ENTRETENIMIENTO DIGITAL. NOSOTROS
        SOMOS UNA COMPAÑÍA QUE SE ENORGULLECE DE SU HABILIDAD PARA COMBINAR LA
        TECNOLOGÍA DE VANGUARDIA CON LA NARRATIVA CAUTIVADORA, CREANDO
        EXPERIENCIAS DE JUEGO INOLVIDABLES. DESDE NUESTROS INICIOS, ASCENT
        SOFTWARE HA SIDO MÁS QUE UN SIMPLE NOMBRE; REPRESENTA NUESTRO COMPROMISO
        INQUEBRANTABLE CON LA EXCELENCIA, LA CREATIVIDAD Y LA INNOVACIÓN.
        NUESTRO OBJETIVO NO ES SIMPLEMENTE CREAR JUEGOS, SINO REVOLUCIONAR LA
        FORMA EN QUE SE JUEGA Y SE EXPERIMENTA EL ENTRETENIMIENTO INTERACTIVO.
        NUESTRA MISIÓN ES TRASCENDER LAS EXPECTATIVAS, DESAFIAR LOS LÍMITES Y
        OFRECER A NUESTROS JUGADORES EXPERIENCIAS QUE VAN MÁS ALLÁ DE LO
        CONVENCIONAL. NUESTRO TALENTOSO EQUIPO DE DESARROLLADORES, ARTISTAS Y
        NARRADORES ESTÁN EN LA VANGUARDIA DE LA INNOVACIÓN EN JUEGOS, EMPUJANDO
        LOS LÍMITES DE LO QUE ES POSIBLE. NOS ENORGULLECE DECIR QUE CADA MIEMBRO
        DE NUESTRO EQUIPO ES UN APASIONADO DE LOS VIDEOJUEGOS Y APORTA SU AMOR Y
        DEDICACIÓN A CADA PROYECTO EN EL QUE TRABAJAMOS. CREEMOS EN EL PODER DE
        LOS VIDEOJUEGOS PARA UNIR A LAS PERSONAS, PARA INSPIRAR LA IMAGINACIÓN Y
        PARA PROPORCIONAR UNA VÍA DE ESCAPE DE LA REALIDAD. EN ASCENT SOFTWARE,
        NOS ESFORZAMOS POR CREAR VIDEOJUEGOS QUE SEAN ATRACTIVOS Y EMOCIONANTES,
        QUE DESAFÍEN AL JUGADOR Y QUE OFREZCAN UNA EXPERIENCIA DE INMERSIÓN SIN
        PRECEDENTES. NUESTRO ENFOQUE EN LOS DETALLES FINOS Y LA AUTENTICIDAD NOS
        PERMITE CREAR MUNDOS DE JUEGO QUE SON RICOS Y VIVOS, QUE INVITAN A LOS
        JUGADORES A EXPLORAR Y A PERDERSE EN ELLOS. NUESTROS JUEGOS SON MÁS QUE
        SOLO SOFTWARE; SON MUNDOS EN SÍ MISMOS, LLENOS DE AVENTURA, EMOCIÓN Y
        POSIBILIDADES INFINITAS.

      </p>
      <br></br>

      <p className="font-next_art">
           SIN EMBARGO, ASCENT SOFTWARE ES MÁS QUE SOLO UN ESTUDIO DE DESARROLLO DE
        VIDEOJUEGOS. SOMOS UNA COMUNIDAD DE CREATIVOS APASIONADOS, UNIDOS POR
        NUESTRA AMOR A LOS VIDEOJUEGOS Y NUESTRA DETERMINACIÓN PARA EMPUJAR LOS
        LÍMITES DE LO QUE ES POSIBLE. NOS ESFORZAMOS POR CONSTRUIR UNA CULTURA
        QUE FOMENTE LA CREATIVIDAD, LA INNOVACIÓN Y LA COLABORACIÓN, Y CREEMOS
        EN LA IMPORTANCIA DE PROPORCIONAR UN AMBIENTE DE TRABAJO POSITIVO Y
        ENRIQUECEDOR. EN ASCENT SOFTWARE, ESTAMOS COMPROMETIDOS A SEGUIR
        INNOVANDO, A SEGUIR EMPUJANDO LOS LÍMITES Y A SEGUIR CREANDO
        EXPERIENCIAS DE JUEGO QUE EMOCIONEN, INSPIREN Y SORPRENDAN. CREEMOS EN
        EL PODER DE LOS VIDEOJUEGOS PARA CAMBIAR VIDAS, Y ESTAMOS EMOCIONADOS DE
        PODER COMPARTIR NUESTRA PASIÓN CON EL MUNDO. EL FUTURO ES BRILLANTE PARA
        ASCENT SOFTWARE, Y ESTAMOS EMOCIONADOS DE LO QUE NOS DEPARA. NOS
        ESFORZAMOS POR SEGUIR SIENDO LÍDERES EN LA INDUSTRIA DEL DESARROLLO DE
        VIDEOJUEGOS, Y ESTAMOS EMOCIONADOS DE CONTINUAR COMPARTIENDO NUESTRA
        VISIÓN Y PASIÓN CON EL MUNDO. NOSOTROS SOMOS ASCENT SOFTWARE, Y SÓLO
        ESTAMOS EMPEZANDO.

      </p>
      </div>
      <br></br>
      <h3 className="text-sm">&copy; ASCENT STUDIOS 2024</h3>

      <br />
      <div className="mx-auto">
      <svg width="30" height="130" viewBox="0 0 30 149" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 3C17.5 1.61929 16.3807 0.5 15 0.5C13.6193 0.5 12.5 1.61929 12.5 3L17.5 3ZM15 148.434L29.4338 134L15 119.566L0.566249 134L15 148.434ZM12.5 3L12.5 134L17.5 134L17.5 3L12.5 3Z" fill="white"/>
      </svg>
      </div>

  <button className="ml-auto px-10 py-10">
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="30" fill="#006401"/>
    <path d="M20.4933 35.2556C20.1644 34.9268 20 34.5082 20 34C20 33.4918 20.1644 33.0732 20.4933 32.7444L28.7444 24.4933C28.9238 24.3139 29.1181 24.1865 29.3274 24.1112C29.5366 24.0371 29.7608 24 30 24C30.2392 24 30.4711 24.0448 30.696 24.1345C30.9196 24.2242 31.1061 24.3438 31.2556 24.4933L39.5067 32.7444C39.8356 33.0732 40 33.4918 40 34C40 34.5082 39.8356 34.9268 39.5067 35.2556C39.1779 35.5845 38.7593 35.7489 38.2511 35.7489C37.7429 35.7489 37.3244 35.5845 36.9955 35.2556L30 28.2601L23.0045 35.2556C22.6756 35.5845 22.2571 35.7489 21.7489 35.7489C21.2407 35.7489 20.8221 35.5845 20.4933 35.2556Z" fill="#F3F3F3"/>
    </svg>
 </button>


    </div>
    </section>
  );

}


