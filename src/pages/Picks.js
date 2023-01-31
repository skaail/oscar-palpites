import React, { useState } from 'react';
import './picks.css'
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';

const Picks = () => {
  const [categories, setCategories] = useState([
    { name: 'Melhor Filme', nominees: ['Avatar: O Caminho da Água', 'Elvis', 'Entre Mulheres', 'Nada de Novo no Front', 'Tudo em Todo Lugar ao Mesmo Tempo', 'Tár', 'Top Gun: Maverick', 'Triângulo da Tristeza'] },
    { name: 'Melhor direção', nominees: ['Daniel Kwan, Daniel Scheinert - Tudo em Todo Lugar ao Mesmo Tempo', 'Martin McDonagh - Os Banshees de Inisherin', 'Ruben Östlund - Triângulo da Tristeza', 'Steven Spielberg - Os Fabelmans', 'Todd Field - Tár'] },
    { name: 'Melhor atriz', nominees: ['Ana de Armas - Blonde', 'Andrea Riseborough - To Leslie', 'Cate Blanchett - Tár', 'Michelle Williams - Os Fablemans', 'Michelle Yeoh - Tudo em Todo Lugar ao Mesmo Tempo'] },
    { name: 'Melhor Ator', nominees: ['Austin Butler - Elvis', 'Bill Nighy - Living', 'Brendan Fraser - A Baleia', 'Colin Farrell - Os Banshees de Inisherin', 'aul Mescal - Aftersun'] },
    { name: 'Melhor atriz coadjuvante', nominees: ['Angela Bassett - Pantera Negra: Wakanda Para Sempre', 'Hong Chau - A Baleia', 'Jamie Lee Curtis - Tudo em Todo Lugar ao Mesmo Tempo', 'Kerry Condon - Os Banshees de Inisherin', 'Stephanie Hsu - Tudo em Todo Lugar ao Mesmo Tempo'] },
    { name: 'Melhor ator coadjuvante', nominees: ['Barry Keoghan - Os Banshees de Inisherin', 'Brendan Gleeson - Os Banshees de Inisherin', 'Brian Tyree Henry - Causeway', 'Judd Hirsh - Os Fabelmans', 'Ke Huy Quan - Tudo em Todo Lugar ao Mesmo Tempo'] },
    { name: 'Melhor roteiro original', nominees: ['Os Banshees de Inisherin', 'Os Fabelmans', 'Tár', 'Triângulo da Tristeza', 'Tudo em Todo Lugar ao Mesmo Tempo'] },
    { name: 'Melhor roteiro adaptado', nominees: ['Entre Mulheres', 'Glass Onion: Um Mistério Knives Out', 'Living', 'Nada de Novo no Front', 'Top Gun: Maverick'] },
    { name: 'Melhor edição', nominees: ['Elvis', 'Os Banshees de Inisherin', 'Tár', 'Top Gun: Maverick', 'Tudo em Todo Lugar ao Mesmo Tempo'] },
    { name: 'Melhor filme internacional', nominees: ['A Menina Silenciosa - Irlanda', 'Argentina, 1985 - Argentina', 'Close - Bélgica/França/Holanda', 'Eo - Polônia', 'Nada de Novo no Front - Alemanha'] },
    { name: 'Melhor animação', nominees: ['A Fera do Mar', 'Gato de Botas 2: O Último Pedido', 'Marcel the Shell With Shoes On', 'Pinóquio por Guillermo del Toro', 'Red: Crescer é uma Fera'] },
    { name: 'Melhor design de produção', nominees: ['Avatar: O caminho da água', 'Babilônia', 'Elvis', 'Nada de Novo no Front', 'Os Fabelmans'] },
    { name: 'Melhor fotografia', nominees: ['Bardo, Falsa Crônica de Algumas Verdades', 'Elvis', 'Império da Luz', 'Nada de Novo no Front', 'Tár'] },
    { name: 'Melhor figurino', nominees: ['Babilônia', 'Elvis', 'Pantera Negra: Wakanda Para Sempre', 'Sra. Harris Vai a Paris', 'Tudo em Todo Lugar ao Mesmo Tempo'] },
    { name: 'Melhor maquiagem e penteados', nominees: ['A Baleia', 'Batman', 'Elvis', 'Nada de Novo no Front', 'Pantera Negra: Wakanda Para Sempre'] },
    { name: 'Melhor som', nominees: ['Avatar: O caminho da água', 'Batman', 'Elvis', 'Nada de Novo no Front', 'Top Gun: Maverick'] },
    { name: 'Melhores efeitos visuais', nominees: ['Avatar: O caminho da água', 'Batman', 'Nada de Novo no Front', 'Pantera Negra: Wakanda Para Sempre', 'Top Gun: Maverick'] },
    { name: 'Melhor trilha sonora', nominees: ['Babilônia', 'Entre Mulheres', 'Nada de Novo no Front', 'Os Fabelmans', 'Pinóquio por Guillermo del Toro'] },
    { name: 'Melhor música original', nominees: ['Applause - Tell it like a woman', 'Hold My Hand - Top Gun: Maverick', 'Lift Me Up - Pantera Negra: Wakanda Para Sempre', 'Naatu Naatu - RRR', 'This is life - Tudo em Todo Lugar ao Mesmo Tempo'] },
    { name: 'Melhor documentário', nominees: ['All That Breathes', 'All the Beauty and the Bloodshed', 'A House Made of Splinters', 'Navalny', 'Vulcões: A Tragédia de Katia e Maurice Krafft'] },
    { name: 'Melhor curta documentário', nominees: ['Haulout', 'How Do You Measure a Year?', 'Stranger at the Gate', 'The Elephant Whisperers', 'The Martha Mitchell Effect'] },
    { name: 'Melhor curta', nominees: ['An Irish Goodbye', 'Ivalu', 'Le Pupille', 'Night Ride', 'The Red Suitcase'] },
    { name: 'Melhor curta de animação', nominees: ['An Ostrich Told Me the World is Fake, and I Think I Believe It', 'Ice Merchants', 'My Year of Dicks', 'The Boy, the Mole, the Fox, and the Horse', 'The Flying Sailor'] },

  ]);

  const [user, setUser] = useState(localStorage.getItem('nome'));

  const [bets, setBets] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "palpites"), {
        bets: bets
      });
    } catch (e) {
    }
  };

  return (
    <form className='formCentral' onSubmit={handleSubmit}>
      {categories.map(({ name, nominees }) => (
        <div key={name}>
          <h2>{name}</h2>
          {nominees.map((nominee) => (
            <div key={nominee}>
              <input
                type="radio"
                name={name}
                value={nominee}
                onChange={(event) => {
                  setBets({ ...bets, [name]: event.target.value , user: user});
                }}
              />
              {nominee}
            </div>
          ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Picks;