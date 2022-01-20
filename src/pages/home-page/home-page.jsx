import {useState, useEffect} from 'react';
import { GameItem } from '../../components/game-item/game-item';
import {cartBlock} from '../../components/cart-block/cart-block'
import './home-page.css';

const GAMES = [
    {
        image: '/game-covers/rdr.jpg',
        title: 'Red Dead Redemption 2',
        genres: ['Открытый мир', 'Приключение'],
        video: 'https://www.youtube.com/embed/eaW0tYpxyp0',
        price: 1499,
        id: 7,
        description: 'Америка, 1899 год. Артур Морган и другие подручные Датча ван дер Линде вынуждены пуститься в бега. Их банде предстоит участвовать в кражах, грабежах и перестрелках в самом сердце Америки.'
    },

    {
        image: '/game-covers/cyberpunk.jpg',
        title: 'Cyberpunk 2077',
        genres: ['Киберпанк', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/8X2kIfS6fb8',
        price: 1999,
        id: 8,
        description: 'Cyberpunk 2077 — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего.'
    },

    {
        image: '/game-covers/metro.jpg',
        title: 'Metro Exodus',
        genres: ['Постапокалипсис', 'Экшен'],
        video: 'https://www.youtube.com/embed/fbbqlvuovQ0',
        price: 2199,
        id: 9,
        description: '2036 год. Прошло четверть века с тех пор, как ядерная война опустошила землю. Москва лежит в руинах, и несколько тысяч выживших вынуждены бороться за существование в тоннелях метро.'
    },

    {
        image: '/game-covers/need_for_speed.jpg',
        title: 'Need for Speed™ Heat',
        genres: ['Гонки', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/9ewiJJe_nYI',
        price: 2899,
        id: 10,
        description: 'Захватывающая игра, в которой вам предстоит столкнуться с лучшими силами полиции и покорить мир уличных гонок. Контент издания Deluxe: 1 стартовый автомобиль — Стартовый автомобиль K.S Edition Mitsubishi Lancer Evolution X.'
    },

    {
        image: '/game-covers/watch_dogs.jpg',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Хакерство', 'Открытый мир', 'Стелс'],
        video: 'https://www.youtube.com/embed/hh9x4NqW0Dw',
        price: 2499,
        id: 11,
        description: 'Талантливый хакер Маркус объединяется с хакерской группой DedSec, чтобы противостоять системе глобального контроля ctOS 2.0, которую криминал использует, чтобы отслеживать и манипулировать жизнью горожан.'
    },

    {
        image: '/game-covers/pubg.jpg',
        title: 'PUBG: BATTLEGROUNDS',
        genres: ['Шутер', 'Выживание'],
        video: 'https://www.youtube.com/embed/URBy9t6e8rY',
        price: 1899,
        id: 12,
        description: 'ПРИЗЕМЛЯЙСЯ, СОБИРАЙ ТРОФЕИ, ВЫЖИВАЙ! Играйте В PUBG: BATTLEGROUNDS бесплатно. Высаживайтесь в стратегически важных местах, добывайте оружие и припасы и постарайтесь выжить и остаться последней командой.'
    },
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 1799,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 2199,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 2499,
        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 1099,
        id: 4,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six®',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 2999,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 3499,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
]

export const HomePage = () => {

    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}