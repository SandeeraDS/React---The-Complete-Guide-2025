import {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function App() {

    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectSquare(rowIndex, colIndex) {
        console.log("active Player =" + activePlayer);
        setActivePlayer((currentPlayer) =>
            currentPlayer === 'X' ? 'O' : 'X'
        );
        setGameTurns((prevGameTurns) => {
            let currentPlayer = 'X';
            if (prevGameTurns.length > 0 && prevGameTurns[0].player === 'X') {
                currentPlayer = 'O';
            }

            return [{
                square: {row: rowIndex, col: colIndex},
                player: currentPlayer
            }, ...prevGameTurns];
        });
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
            <Log/>
        </main>
    )
}

export default App
