import {useState} from "react";

export default function Player({playerInitialName, playerSymbol, isActive}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(playerInitialName);

    let playerNameElement = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        playerNameElement =
            <input id="playerNameInput" type="text" required value={playerName}
                   onChange={(event) => setPlayerName(event.target.value)}/>;
    }


    return (<li className={isActive ? 'active' : undefined}>
            <span className="player">
            {playerNameElement}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
        <button onClick={() => setIsEditing(editing => !editing)}>{isEditing ? "Save" : "Edit"}</button>
    </li>);
}