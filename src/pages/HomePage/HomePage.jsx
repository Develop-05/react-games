import {useState, useEffect} from 'react';
import { GameItem } from '../../components/GameItem/GameItem';
import {games} from '../../config/api';
import axios from 'axios';

import './HomePage.css';

export const HomePage = () => {
    const [value, setValue] = useState('');

    useEffect(() => {
        axios.get(games);
    // connected data using axios
    }, [])

    const filteredGames = games.filter(game => {
      return game.title.toLowerCase().includes(value.toLowerCase());
    })

    return (
    <>
      <div className="search__form">
        <input 
        type="text"
        placeholder="look for a game"
        className="search__input"
        onChange={(event) => setValue(event.target.value)}
        />
      </div>

        <div className="home-page">
            { filteredGames.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    </>
    )
}