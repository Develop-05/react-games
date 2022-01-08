import GameData from './games.json';

const BASE_URL = GameData;

export const ALL_GAMES = BASE_URL + 'all?fields=image,title,genres,price,video,id,description';