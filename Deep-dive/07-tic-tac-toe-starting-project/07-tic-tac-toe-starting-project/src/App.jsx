import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";

function App() {

    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelectSquare() {
        console.log("active Player =" + activePlayer);
        setActivePlayer((currentPlayer) =>
            currentPlayer === 'X' ? 'O' : 'X'
        );
    }

    return (
        <main>
            <div id='game-container'>
                <ol id="players" className="highlight-player">
                    <Player playerInitialName="Player 1" playerSymbol="X" isActive={activePlayer === 'X'}/>
                    <Player playerInitialName="Player 2" playerSymbol="O" isActive={activePlayer === 'O'}/>
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
            </div>
            LOG
        </main>
    )
}

export default App
